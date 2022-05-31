import { MessageService } from './../services/message.service';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjViNGI2NTk1MWNiZDdhYTUyNjhhNTQyMDBjMjE1ODNkYjA0NzRhOGUzNTVhNDgyNmY2MjVmOTk0NDRhZWY0MjE4ODZmNzE2YjgwYTUyMTdlIn0.eyJhdWQiOiIyIiwianRpIjoiNWI0YjY1OTUxY2JkN2FhNTI2OGE1NDIwMGMyMTU4M2RiMDQ3NGE4ZTM1NWE0ODI2ZjYyNWY5OTQ0NGFlZjQyMTg4NmY3MTZiODBhNTIxN2UiLCJpYXQiOjE2MTIzMTgxNjMsIm5iZiI6MTYxMjMxODE2MywiZXhwIjoxNjEzNjE0MTYzLCJzdWIiOiIxMjIiLCJzY29wZXMiOltdfQ.JjPjV4d5L1w5VkZm-D7j3QskMCtCnAaczPgN9qf9oCUDtI3GEIEXhuDsvwgKXeGIGr10CyuNtCQXN6MEdPhkaFHwTgFrce_KskO6oG6P_KwI-jWsazzJm8iQOVaqySFd6Zjv1vyJ3SUXvwn-AbYmcid5NtSfK6aLn_8B2zFll9FMOIjR72DyqbC42uoCwlfyA1QYdgJEkBlJRxzgPgdR03lRSil3NzWsqc1RM8hUaFSZ1wGEvSAgFSDt269mTxYS1RyxQ3JxxACVpJEQSQMrsMTc5Djq0TlkqOrL1X6pHswCprucIIgemuzKlYx58APh87jCMEtfPFhOB7u1XncHntokRE6lvEq-kIR9SeBl96tCaAgOFXd1v2-QOykFeTAHgRK2-haFk15tkmmdxIQZ98IB6FuxkvyDeblKRsqgzBQelt0XGD-g3hp7OcH8xdoyVebKrj4kByabZe9s3_YTszktKI3rf_7t7ydkRI5qJ9QDMeAp7iFrTu-JsuMqLiX1wPvLmuH8S__HGcexBpxAmiW_cjrXIXi_Y1tWfno331tMgisBkQNa8rac5OTmzulmiaJcB-0-bzW6C6FoeryMcvysKB0hqx9MWcNgkqNp5xZt0S8I6giwDebV6ZqG96829XgC9kxVCvFV7qKmdekpeavdG-iOnQkXqhVVCi3EnLQ';
  constructor(public mensajeService: MessageService) {}
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let headers;
    if (req.url !== 'http://api.obbro.co/api/v1/login') {
      headers = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      });
    } else {
      console.log('no entro');
    }
    const REQ_CLONE = req.clone({
      headers,
    });
    return next.handle(REQ_CLONE).pipe(catchError(this.manejarError));

    // console.log(req);
    // return next.handle(req).pipe(
    //   catchError( this.manejarError )
    //   );;
  }

  manejarError(error: HttpErrorResponse) {
    console.error('ERRORES PRESENTADOS', error.message);
    // this.mensajeService.showCustom(error.message, null, "error");
    return throwError(error);
  }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + this.token,
    }),
  };

  public setHttpOption() {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.token,
      }),
    };
  }
}
