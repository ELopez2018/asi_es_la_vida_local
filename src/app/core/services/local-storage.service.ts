import { Sale } from './../interfaces/sale.interface';
import { Injectable } from '@angular/core';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  setSale(sale: Sale) {
    localStorage.setItem('sale', JSON.stringify(sale));
  }
  getSale(): Sale {
    return JSON.parse(localStorage.getItem('sale'));
  }
  updateSale(sale: Sale) {
    localStorage.removeItem('sale');
    this.setSale(sale);
  }
  removeSale() {
    localStorage.removeItem('sale');
  }

  removeItem(key: string) {
    localStorage.removeItem(key);
  }
  setItem(key: any, item: any) {
    localStorage.setItem(key, JSON.stringify(item));
  }
  getItem(key: string): User {
    let user!: any;
    user = localStorage.getItem(key);
    return JSON.parse(user);
  }
  removeAll() {
    localStorage.clear();
  }
}
