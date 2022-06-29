import {
    createSelector,
    createFeatureSelector,
    Action,
    ActionReducerMap,
} from '@ngrx/store';
import { InjectionToken } from '@angular/core';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromAuth from '@root/auth/login/store/reducer';
import * as fromRequest from '@root/main/requests/store/reducer';
import  * as fromSale  from '@root/components/sale/store/sale.reducer';



/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    auth: fromAuth.State;
    request: fromRequest.State;
    sale: fromSale.SaleState

}
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>
    ('Root reducers token', {
        factory: () => ({
            auth: fromAuth.reducer,
            request: fromRequest.reducer,
            sale:fromSale.SaleReducer
        }),
    });

// ================[AUTENTICACION]======================================\\
//#region Auntentication
export const getAuthState = createFeatureSelector<State, fromAuth.State>(
    'auth'
);

export const getLoggedIn = createSelector(
    getAuthState,
    fromAuth.getLoggedIn
);

export const getAuthUser = createSelector(
    getAuthState,
    fromAuth.getAuthUser
);

export const getLoginError = createSelector(
    getAuthState,
    fromAuth.getLoginError
);
export const getAuthLoading = createSelector(
    getAuthState,
    fromAuth.getAuthLoading
);
//#endregion

// ================[Request]==============================================\\
//#region Request
export const getRequestState = createFeatureSelector<State, fromRequest.State>(
    'request'
);
export const getCurrentRequest = createSelector(
    getRequestState,
    fromRequest.getRequest
)

export const getRequestAll = createSelector(
    getRequestState,
    fromRequest.getRequestAll
)
export const getRequestError = createSelector(
    getRequestState,
    fromRequest.getRequestError
)
export const getRequestMessage = createSelector(
    getRequestState,
    fromRequest.getRequestMessage
)
export const getRequestLoading= createSelector(
  getRequestState,
  fromRequest.getRequestLoading
)
//#endregion

// ================[Sale]======================================\\
//#region Sale
export const getSaleState = createFeatureSelector<State, fromSale.SaleState>(
  'sale'
);
export const getSaleError = createSelector(
  getSaleState,
  fromSale.SaleError
);
export const getSaleLoading = createSelector(
  getSaleState,
  fromSale.SaleLoading
);
export const getSaleMessage = createSelector(
  getSaleState,
  fromSale.SaleMessage
);


export const getClient = createSelector(
  getSaleState,
  fromSale.getClient
);
//#endregion
