import { Items } from './../../core/interfaces/items.interface';
import { LocalStorageService } from '@services/local-storage.service';
import { ProductService } from './../../core/services/product.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { saleMock } from '@root/core/mocks/sale.mock';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '@interfaces/product.interface';
import { PathServerImg } from '@interfaces/path-server-Img.interface';
import { MatTable } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss'],
})
export class SaleComponent implements OnInit {
  public venta = saleMock;
  public products: PathServerImg[] =[];
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
  public totalBase:number;
  public totalTax:number;
  public totalDiscount:number;
  public totalPay:number;

  displayedColumns: string[] = ['index','qty', 'description', 'presentacion', 'moneda', 'precio','descuento', 'total', 'actions' ];
  dataSource: Items[] = saleMock.items;
  constructor(private productService: ProductService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getAllProducts();
    this.getItemsFromLocalStorage()

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
    this.dataSource = this.localStorageService.getSale().items
    this.totalizer()
  }
  totalizer() {
    this.totalBase = 0;
    this.totalTax = 0
    this.totalDiscount = 0;
    this.totalPay = 0;
    this.dataSource.forEach(i => {
      this.totalBase += i.precio * i.qty
      this.totalDiscount += i.descuento
    })
    this.totalPay = (this.totalBase + this.totalTax) -  this.totalDiscount
  }

  deleteItem(index: any) {
    this.dataSource.splice(index, 1);
      console.log(index);
    this.totalizer()
    this.venta.items  = this.dataSource
    this.table.renderRows();
    this.localStorageService.updateSale(this.venta)
  }
}
