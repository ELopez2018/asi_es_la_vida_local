import { Injectable } from '@angular/core';
import { User } from '@interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}


  setSale(sale: any) {
    localStorage.setItem('sale', JSON.stringify(sale));
  }
  getSale(): any {
    return JSON.parse(localStorage.getItem('sale'));
  }
  updateSale(sale: any) {
    localStorage.removeItem('sale');
    this.setSale(sale)
  }
  removeItem(key: string) {
    localStorage.removeItem(key)
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
