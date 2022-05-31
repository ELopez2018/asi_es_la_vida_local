import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";

import * as fromAppRoot from "@root/core/store/reducer.index";
import { RequestModel } from "@models/request.model";
import { RequestActions } from "@root/core/store/actions.index";


@Injectable({
    providedIn: "root",
})
export class RequestFacadeService {
    constructor(private store: Store<fromAppRoot.State>) {}

    getCurrentRequest$(): Observable<RequestModel | null> {
        return this.store.select(fromAppRoot.getCurrentRequest);
    }
    getAllRequest$(): Observable<RequestModel[] | null> {
      return this.store.select(fromAppRoot.getRequestAll);
  }
    searchRequestById(id: number) {
        this.store.dispatch(RequestActions.searchById({ id }));
    }
    searchAllRequest() {
        this.store.dispatch(RequestActions.searchAllRequest());
    }
    loading$(): Observable<boolean> {
      return this.store.select(fromAppRoot.getRequestLoading);
  }
}
