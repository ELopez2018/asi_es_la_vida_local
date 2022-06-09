import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { ResponseProducts } from '@interfaces/response-products.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public urlApi: string = environment.API_URL;
  constructor(private http: HttpClient) {}
  public saveProduct$(product: any): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('app', 'FromApp');
    const option = { headers };
    const url = `${this.urlApi}products`;
    return this.http.post<any>(url, product, option)
  }
  public getAllProducts$(): Observable<ResponseProducts> {
    const url = `${this.urlApi}products`;
    return this.http.get<ResponseProducts>(url)
  }
}
