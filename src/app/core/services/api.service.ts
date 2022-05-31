import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiActionModel } from '../models/api-action-model';
import { ApiServiceInterface } from '../interfaces/api-service-interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService<T> implements ApiServiceInterface<T> {

  constructor(private httpClient: HttpClient) { }

  create$(action: ApiActionModel<T>): Observable<T> {
    return this.httpClient
      .post(action.url, action.payload)
      .pipe(
        map(data => data as T)
      )
  }
  //TODO: Función provisional para administrar un post array y se reemplazar luego por tipo genericos
  // de cada función
  createGeneric$<P,V>(action: ApiActionModel<P>, token?: string): Observable<V> {
    let headers = new HttpHeaders();
    if(token){
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return this.httpClient
      .post(action.url, action.payload,{
        headers: headers
      })
      .pipe(
        map(data => data as V)
      )
  }
  searchAll$(action: ApiActionModel<T>): Observable<T[]> {
    return this.httpClient
      .get(`${action.url}`)
      .pipe(
        map(data => data as T[])
      )
  }
  search$(action: ApiActionModel<T>): Observable<T> {
    return this.httpClient
      .get(`${action.url}`)
      .pipe(
        map(data => data as T)
      )
  }
  update$(action: ApiActionModel<T>): Observable<T> {
    return this.httpClient
      .put(`${action.url}`, action.payload)
      .pipe(
        map(data => data as T)
      )
  }
  delete$(action: ApiActionModel<T>): Observable<{}> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: action.payload
    };
    return this.httpClient
      .delete(`${action.url}`, options).pipe(
        mergeMap(() => of({}))
      )
  }
  deleteBlob(action: ApiActionModel<T>): Observable<boolean> {
    return this.httpClient.post(action.url, action.payload).pipe(
      map(data => data as boolean)
    )
  }
  upload$(action: ApiActionModel<File>): Observable<string> {
    return this.httpClient.post(`${action.url}`, action.payload).pipe(
      map((url) => url as string)
    )
  }
  download(action: ApiActionModel<T>): Observable<string> {
    return this.httpClient.post(`${action.url}`, action.payload).pipe(
      map((base64File: string) => {
        return base64File;
      })
    )
  }
}
