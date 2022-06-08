import { ProductService } from './../../core/services/product.service';
import { MessageService } from './../../core/services/message.service';
import { environment } from '@environments/environment';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ImageService } from '@services/image.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { v4 as uuidv4 } from 'uuid';
import { PathServerImg } from '@interfaces/path-server-Img.interface';
@Component({
  selector: 'app-product-register',
  templateUrl: './product-register.component.html',
  styleUrls: ['./product-register.component.scss'],
})
export class ProductRegisterComponent implements OnInit {
  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: false,
  };
  public form!: FormGroup;
  public imagesFiles: File[] = [];
  public imageRepre!: File;
  public typeFiles: string[] = ['image/png', 'image/jpeg'];
  public progress!: number;
  public urlImage!: PathServerImg;
  public images: any[] = [];
  public server = environment.STORAGE;
  public loading: boolean = false;
  public loading2: boolean = false;
  public sku!: string;
  public imgPathServer!: string;
  constructor(
    private fb: FormBuilder,
    private imageService: ImageService,
    private messageService: MessageService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.createForm();
  }
 private  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl(null, [Validators.required]),
      sku: new FormControl(this.getSku(), [Validators.required]),
      image: new FormControl(null),
      color: new FormControl(null),
      type_packaging: new FormControl(null, Validators.required),
      type_presentation: new FormControl(null),
      short_description: new FormControl(null),
      description: new FormControl(null),
      regular_price: new FormControl(null),
      sale_price: new FormControl(null),
      discount: new FormControl(false),
      status: new FormControl(false),
      stock_status: new FormControl(false),
      carousel: new FormControl(null),
      taxes: new FormControl(null),
      stock_min: new FormControl(null),
      stock: new FormControl(null),
      price_cost: new FormControl(null),
    });

    this.form.get('sku')?.disable();
  }
  get name() {
    return this.form.get('name');
  }

  get status() {
    return this.form.get('status');
  }
  get stock_status() {
    return this.form.get('stock_status');
  }
  get discount() {
    return this.form.get('discount');
  }
  public uploadImage(fileinput: any, type: string) {
    if (!fileinput) {
      console.error('Error');
      this.messageService.showCustom(
        'No hay imagen que guardar',
        null,
        'error'
      );
      return;
    }
    switch (type) {
      case 'main':
        this.loading = true;
        break;
      case 'carousel':
        this.loading2 = true;
        break;
    }
    this.saveImage(fileinput, this.sku, type);
  }

  private saveImage(fileinput: any, name: string, type: string): string {
    let path: any;
    if (!fileinput) return '';
    const files: FileList = fileinput.target.files;
    if (!this.typeFiles.includes(files[0].type)) return '';
    const result = files[0];
    const file = result;
    this.imageService.saveImage$(file, name).subscribe(
      (event) => {
        path = {
          originUrl: event.Details,
          url: event.Details.replace('public', ''),
          urlServer: event.Details.replace('public', ''),
        };
        this.imgPathServer = path.url;
        this.loading = false;
        this.loading2 = false;
        this.configImage(path, type);
        this.messageService.showCustom('Imagen guardada', null, 'success');
        return path;
      },
      (error) => {
        this.loading = false;
        this.loading2 = false;
        console.error(error);
        this.messageService.showCustom(error.message, null, 'error');
        return;
      }
    );

    return '';
  }

  private setImagesForm() {
    let carousel: string[] = [];
    if (this.urlImage) {
      this.form.get('image')?.setValue(this.urlImage?.urlServer);
    }
    this.images?.forEach((i) => {
      carousel.push(i.urlServer);
    });
    if (carousel.length > 0) {
      this.form.get('carousel')?.setValue(carousel);
    }
  }

  public getSku(): string {
    this.sku = uuidv4();
    return this.sku;
  }
  private configImage(path: any, type: string) {
    switch (type) {
      case 'main':
        this.urlImage = {
          url: this.server + path.url,
          originUrl: path.originUrl,
          urlServer: path.urlServer,
        };
        break;
      case 'carousel':
        this.images.push({
          url: this.server + path.url,
          originUrl: path.originUrl,
          urlServer: path.urlServer,
        });
        break;
    }
  }
  public deleteImage(image: PathServerImg, type?: string) {
    this.imageService.deleteImage$(image.urlServer).subscribe(
      (_) => {
        switch (type) {
          case 'main':
            this.urlImage.url = '';
            break;
          case 'carousel':
            this.images = this.images.filter(
              (item: PathServerImg) => item.urlServer !== image.urlServer
            );
            this.images = this.images.length <= 0 ? [''] : this.images;
            break;
        }
        this.messageService.showCustom('Imagen eliminada', null, 'success');
      },
      (error) => {
        switch (type) {
          case 'main':
            this.urlImage.url = '';
            break;
          case 'carousel':
            this.images = [''];
            console.log('entro');
            break;
        }
        console.error(error);
        this.messageService.showCustom('Ha pasado algo malo', null, 'error');
        return;
      }
    );
  }

  public save(): void {
    this.setImagesForm();
    let value = this.form.value;
    console.log(this.form.value);
    value.sku = this.sku;
    console.log(value);
    this.productService.saveProduct$(value).subscribe(response =>{
      this.form.reset();
      this.urlImage =null;
      this.images =[];
      this.form.get('sku')?.setValue(this.getSku());
      this.messageService.showCustom(response.message, null, 'error');
    }, error => {
      this.messageService.showCustom(error.error.message, null, 'error');
    })

  }
}

// original                                "public/products/June2022/0r1roixBDfMC7y1WYWwiFBLaEQoNrwMbXpqb9NzW.png"
// completa /var/www/html/obbrocms/public/storage/products/June2022/1deDQ6N0VYdWZ7GZkMz2NpMCZWEyfhJwvxkA305D.png
// FOLDER_ROOT=/var/www/html/obbrocms/public/storage/
