import { Client } from '@interfaces/client.interface';
import { createAction, props } from '@ngrx/store';

enum SaleActionsType {
  Load                        = "[Sale] Load",
  setStorageClient            = "[Sale] Set Client in the Store",
  getClientFromStore          = "[Sale] Get Client From Store ",
  deleteClientinStore         = "[Sale] Delete Clien in Store",
}
const setClientInStore = createAction(
  SaleActionsType.setStorageClient,
  props<{ client: Client }>()
);
const getClientFromStore = createAction(
  SaleActionsType.getClientFromStore,
  props<{ client: Client }>()
);

export const SaleActions = {
  setClientInStore,
  getClientFromStore,
};
