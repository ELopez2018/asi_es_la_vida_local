import { Injectable } from '@angular/core';
import { Client } from '@interfaces/client.interface';
import { Store } from '@ngrx/store';

import * as fromAppRoot from '@reducers/reducer.index';
import { Observable } from 'rxjs';
import { SaleActions } from './store/sale.actions';

@Injectable({
  providedIn: 'root',
})
export class SaleFacadeService {
  constructor(private store: Store<fromAppRoot.State>) {}
  getClient$(): Observable<Client> {
    return this.store.select(fromAppRoot.getClient);
  }

  setClient(client: Client) {
    this.store.dispatch(SaleActions.setClientInStore({ client }));
  }
}
