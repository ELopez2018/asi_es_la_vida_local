import { Product } from '@interfaces/product.interface';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {
@Input() products: Product
@Output() product: EventEmitter<Product> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

}
