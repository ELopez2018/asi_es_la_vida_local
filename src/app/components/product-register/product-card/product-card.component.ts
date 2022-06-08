import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() image!: any;
  @Input() loading!: boolean;
  @Output() itemDelete: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onItemDelete(item: any) {
    this.itemDelete.emit(item);
  }
}
