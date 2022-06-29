import { Client } from './../../core/interfaces/client.interface';
import { Items } from './../../core/interfaces/items.interface';
import { LocalStorageService } from '@services/local-storage.service';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { saleMock } from '@root/core/mocks/sale.mock';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { PathServerImg } from '@interfaces/path-server-Img.interface';
import { MatTable } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { tap, debounceTime, map } from 'rxjs/operators';
import { Product } from '@interfaces/product.interface';
import { Subscription } from 'rxjs';
import { SaleFacadeService } from './sale.facade';
import { clientMock } from '@root/core/mocks/client.mock';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from '@root/shared/add-user/add-user.component';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  public venta = saleMock;
  public products: PathServerImg[] = [];
  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 7,
      },
    },
    nav: false,
  };
  @ViewChild(MatTable) table: MatTable<PeriodicElement>;
  public showCarousel: boolean = true;
  public totalBase: number;
  public totalTax: number;
  public totalDiscount: number;
  public totalPay: number;

  displayedColumns: string[] = [
    'index',
    'qty',
    'description',
    'presentacion',
    'moneda',
    'precio',
    'descuento',
    'total',
    'actions',
  ];
  dataSource: Items[] = saleMock.items;
  public search = new FormControl('');
  public showSpinner: boolean = false;
  public productsFound: Product[] = [];
  private subs: Subscription = new Subscription();
  public client: Client;
  constructor(
    private productService: ProductService,
    private localStorageService: LocalStorageService,
    private saleFacade: SaleFacadeService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getItemsFromLocalStorage();
    this.subscripcions();
  }
  subscripcions() {
    this.search.valueChanges
      .pipe(
        tap((_) => {
          this.showSpinner = true;
          console.log('object');
        }),
        debounceTime(1000),
        map((e: any) => {
          this.searchProduct(e);
          this.showSpinner = false;
        })
      )
      .subscribe();
    const sub1 = this.saleFacade.getClient$().subscribe((client) => {
      if (!client || !client.name) {
        this.client = clientMock;
        return;
      }
      this.client = client;
    });
    this.subs.add(sub1);
  }
  public getAllProducts(): any {
    this.productService.getAllProducts$().subscribe((products) => {
      products.data.forEach((i) => {
        const image: PathServerImg = {
          url: i.image,
          originUrl: i.image,
          urlServer: i.image,
        };
        this.products.push(image);
      });
      // this.products = products.data
    });
  }

  getItemsFromLocalStorage() {
    const dataTemp=this.localStorageService.getSale()
    if(!dataTemp || dataTemp.items.length <= 0){ this.dataSource = []; return;}
    this.dataSource = dataTemp.items;
    this.totalizer();
  }
  totalizer() {
    this.totalBase = 0;
    this.totalTax = 0;
    this.totalDiscount = 0;
    this.totalPay = 0;
    this.dataSource.forEach((i) => {
      this.totalBase += i.precio * i.qty;
      this.totalDiscount += i.descuento;
    });
    this.totalPay = this.totalBase + this.totalTax - this.totalDiscount;
  }

  deleteItem(index: any) {
    this.dataSource.splice(index, 1);
    console.log(index);
    this.totalizer();
    this.venta.items = this.dataSource;
    this.table.renderRows();
    this.localStorageService.updateSale(this.venta);
  }

  addItem(query: string) {
    console.log('object', query);
  }

  public searchProduct(query: string) {
    this.showCarousel = true;
    this.productsFound = [];
    if (!query || query === '') {
      return;
    }
    this.showCarousel = true;
    this.productService.getProductsByQuery$(query).subscribe((products) => {
      this.showCarousel = products.data.length <= 0;
      this.productsFound = [...products.data];
    });
  }
  public openDialogClient() {
    const dialogRef = this.dialog.open(AddUserComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log(`Dialog result: ${result}`);
    // });
  }
}
