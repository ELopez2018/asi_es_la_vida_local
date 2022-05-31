import { of } from 'rxjs';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  concatMap,
  map,
  switchMap,
  mergeMap,
  tap,
} from 'rxjs/operators';
import { AuthActions } from '@root/core/store/actions.index';

import { UserModel } from '@models/user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {  AuthService } from '@services/auth/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService, private http: HttpClient, private router: Router) {}
  logineffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Login),
      // tap((e) => console.log('paso 3 effect', e)),
      switchMap(({ credential }) =>
        this.authService.login$(credential).pipe(
          map((user: UserModel) => AuthActions.LoginSuccess({ user })),
          catchError((error: HttpErrorResponse) =>
            of(AuthActions.loginError({ error: error.message }))
          )
        )
      )
    )
  );
  logouteffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.Logout),
      // tap((e) => console.log('paso 3 effect', e)),
      switchMap((e) =>
        this.authService.logout$().pipe(
          map((e) => AuthActions.LogoutSuccess({msg:'Salio del sistema'})),
          tap((e) => this.authService.logout$()),
          catchError((error: HttpErrorResponse) =>
            of(AuthActions.loginError({ error: error.message }))
          )
        )
      )
    )
  );
  // logoutSuccessEffect$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType( AuthActions.LogoutSuccess),
  //     tap((e) => this.router.navigateByUrl('auth')),
  //     // switchMap((e) =>
  //     //   this.authService.logout$().pipe(
  //     //     map((e) => AuthActions.LogoutSuccess({msg:'Salio del sistema'})),
  //     //     tap((e) => this.authService.logout$()),
  //         // catchError((error: HttpErrorResponse) =>
  //         //   of(AuthActions.loginError({ error: error.message }))
  //         // )
  //       // )
  //     // )
  //   )
  // );
}
