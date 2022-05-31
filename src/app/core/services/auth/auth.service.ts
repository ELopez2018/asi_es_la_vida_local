import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { UserModel } from "@models/user.model";

import { environment } from "@environments/environment";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { map, tap } from "rxjs/operators";
import { AuthenticateModel } from "@models/security/authenticate.model";


@Injectable({
    providedIn: "root",
})
export class AuthService {
    access_token: string = "";
    token = "";
    urlApi: string = environment.API_URL;
    Headers = new HttpHeaders().set("Content-Type", "application/json");
    constructor( private http: HttpClient) {}

    private httpOptions = {
        headers: new HttpHeaders({
            "Content-Type": "application/json",
            Authorization: "Bearer " + this.token,
            // token: this.token
        }),
    };

    public setHttpOption() {
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: "Bearer " + this.token,
                // token: this.token
            }),
        };
    }


    createUser$(user: UserModel): Observable<UserModel> {
        // console.log("Create User", user);
        return this.http
            .post<UserModel>(this.urlApi + `users`, user, this.httpOptions)
            .pipe(
                tap((resp) => {
                    // console.log('REPUESTA: ', resp)
                    return resp;
                })
            );
        // return of(user);
    }

    login$(credential: AuthenticateModel): Observable<UserModel> {
      console.log('PASO 4 AuthService-> login$');
        return this.http
            .post<UserModel>(this.urlApi + `login`, credential)
            .pipe(
                map(

                    (resp:any) => {
                        localStorage.setItem('user',JSON.stringify(resp.data.user))
                        return resp.data.user;
                    },
                    (error: HttpErrorResponse) => {
                        return error;
                    }
                )
            );
        //   return of(mockCurrentUser());
    }
    currentToken(type: "silent" | "popup" = "silent"): Observable<string> {
        switch (type) {
            case "silent":
                return of("currentToken por hacer");
            case "popup":
                return of("currentToken por hacer");
            default:
              return of("currentToken por hacer");
                break;
        }
    }

    logout$(): Observable<boolean> {
        localStorage.clear();
        return of(true);
    }
}
