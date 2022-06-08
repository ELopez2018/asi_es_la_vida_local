import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  public urlApi: string = environment.API_URL;
  constructor(private http: HttpClient) {}
  public saveProduct$(product: any): Observable<any> {
    const url= `${this.urlApi}products`
    return this.http.post<any>(url, product).pipe(
      tap((resp) => {
        console.log('response', resp);
        return resp;
      })
    );
  }
}
