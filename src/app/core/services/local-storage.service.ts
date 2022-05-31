import { Injectable } from '@angular/core';
import { UserModel } from '@models/user.model';
import { appConstants } from '../constants';


@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  setItem(key:any, item:any) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  getItem(key: string): UserModel {
    let user!: any;
    user=localStorage.getItem(key);
    return JSON.parse(user);
  }

  removeItem(key: string) {
    localStorage.removeItem(key)
  }

  removeAll() {
    console.log('borró');
    localStorage.clear();
  }

//   getToken() {
//     return JSON.parse(localStorage.getItem(appConstants.TOKEN_APP));
// }
}
