import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '@models/user.model';

import { environment } from '@environments/environment';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { AuthenticateModel } from '@models/security/authenticate.model';
import { RequestModel } from '@models/request.model';

@Injectable({
  providedIn: 'root',
})
export class RequestService {
  access_token: string = '';
  token = '';
  urlApi: string = environment.API_URL;
  Headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
      // token: this.token
    }),
  };

  public setHttpOption() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
        // token: this.token
      }),
    };
  }

  searchAllRequest$(): Observable<RequestModel[]> {
    console.log("RequestService searchAllRequest");
    return this.http.get<RequestModel[]>(this.urlApi + `requestServices`).pipe(
      tap((resp) => {
        console.log('searchAllRequest: ', resp);
        return resp;
      })
    );
  }
}
