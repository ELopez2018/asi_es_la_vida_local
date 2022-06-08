import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  public urlApi: string = environment.API_URL;
  constructor(private http: HttpClient) {}
  public saveImage$(image: File, name: string): Observable<any> {
    let formdata = new FormData();
    // formdata.append('_method', 'PUT');
    formdata.append('image', image);
    formdata.append('name', name);
    return this.http.post<any>(`${this.urlApi}images`, formdata).pipe(
      tap((resp) => {
        console.log('response', resp);
        return resp;
      })
    );
  }
  public deleteImage$(image: string): Observable<any> {
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.set('data', image);
    const option = { headers };
    return this.http.delete<any>(`${this.urlApi}images`, option).pipe(
      tap((resp) => {
        console.log('response', resp);
        return resp;
      })
    );
  }
}
