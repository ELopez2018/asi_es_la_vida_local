import { Client } from '@interfaces/client.interface';
import { Action, createReducer, on } from '@ngrx/store';
import { SaleActions } from './sale.actions';

export interface SaleState {
  client: Client;
  error: any;
  loading: boolean;
  message: string;
}
export const initialState: SaleState = {
  client: null,
  error: null,
  loading: false,
  message: null,
};
export const saleReducer = createReducer(
  initialState,
  on(SaleActions.setClientInStore, (state, { client }) => ({
    ...state,
    client,
    error: null,
    loading: false,
    message: 'Cliente almacenado en el Store'
  }))
);

export function SaleReducer(state: SaleState | undefined, action: Action) {
  return saleReducer(state, action);
}
export const SaleError = (state: SaleState) => state.error;
export const SaleLoading = (state: SaleState) => state.loading;
export const SaleMessage = (state: SaleState) => state.message;

export const getClient = (state: SaleState) => state.client;
