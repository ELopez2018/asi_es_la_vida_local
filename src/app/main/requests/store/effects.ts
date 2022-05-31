import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  switchMap,
} from 'rxjs/operators';
import { RequestActions } from '@root/core/store/actions.index';
import { RequestService } from '@services/request.service';
import { RequestModel } from '@models/request.model';

@Injectable()
export class RequestEffects {
  constructor(
    private actions$: Actions,
    private requestService: RequestService
  ) {}
  SearchAllRequestEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(RequestActions.searchAllRequest),
      // tap((e) => console.log('paso 3 effect', e)),
      switchMap((e) =>
        this.requestService.searchAllRequest$().pipe(
          map((requestAll: RequestModel[]) =>
            RequestActions.searchAllRequestSuccess({ requestAll })
          ),
          catchError((error: HttpErrorResponse) =>
            of(RequestActions.requestError({ error: error.message }))
          )
        )
      )
    )
  );
}
