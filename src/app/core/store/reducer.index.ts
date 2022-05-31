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

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
    auth: fromAuth.State;
    request: fromRequest.State;
    // address: fromAddress.State;
    // orders: fromOrders.State;
    // vendor: fromVendor.State;
    // product: fromProduct.State
}
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>
    ('Root reducers token', {
        factory: () => ({
            auth: fromAuth.reducer,
            request: fromRequest.reducer,
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

// // ================[Address Shipping]==============================================\\
// //#region Address Shipping
// export const getAddressShippingState = createFeatureSelector<State, fromAddress.State>(
//     'address'
// );
// export const getCurrentAddressShipping = createSelector(
//     getAddressShippingState,
//     fromAddress.getCurrentAddressShipping
// )

// export const getAddressesShipping = createSelector(
//     getAddressShippingState,
//     fromAddress.getAddressesShipping
// )

// export const getAddressesShippingLoading = createSelector(
//     getAddressShippingState,
//     fromAddress.getAddressShippingLoading
// )
// export const getAddressShippingError = createSelector(
//     getAddressShippingState,
//     fromAddress.getAddressShippingError
// )
// export const getAddressShippingMessage = createSelector(
//     getAddressShippingState,
//     fromAddress.getAddressShippingMessage
// )
// //#endregion

// // ================[Orders]==============================================\\
// //#region Orders
// export const getOrdersState = createFeatureSelector<State, fromOrders.State>(
//     'orders'
// );
// export const getOrdersCurrent = createSelector(
//     getOrdersState,
//     fromOrders.getOrdersCurrent
// )
// export const getOrdersAll = createSelector(
//     getOrdersState,
//     fromOrders.getOrdersAll
// )

// export const getOrdersLoading = createSelector(
//     getOrdersState,
//     fromOrders.getOrdersLoading
// )
// export const getOrdersError = createSelector(
//     getOrdersState,
//     fromOrders.getOrdersError
// )
// export const getOrdersMessage = createSelector(
//     getOrdersState,
//     fromOrders.getOrdersMessage
// )
// //#endregion

// // ================[Vendor]==============================================\\
// //#region Vendor
// export const getVendorState = createFeatureSelector<State, fromVendor.State>(
//     'vendor'
// );
// export const getVendorCurrent = createSelector(
//     getVendorState,
//     fromVendor.getVendorCurrent
// )
// export const getVendorsAll = createSelector(
//     getVendorState,
//     fromVendor.getVendorAll
// )

// export const getVendorLoading = createSelector(
//     getVendorState,
//     fromVendor.getVendorLoading
// )
// export const getVendorError = createSelector(
//     getVendorState,
//     fromVendor.getVendorError
// )
// export const getVendorMessage = createSelector(
//     getVendorState,
//     fromVendor.getVendorMessage
// )
// //#endregion
// // ================[ Product]==============================================\\
// //#region Product
// export const getProductState = createFeatureSelector<State, fromProduct.State>(
//     'product'
// );
// export const getProductCurrent = createSelector(
//     getProductState,
//     fromProduct.getProductCurrent
// )
// export const getProductsAll = createSelector(
//     getProductState,
//     fromProduct.getProductsAll
// )

// export const getProductLoading = createSelector(
//     getProductState,
//     fromProduct.getProductLoading
// )
// export const getProductError = createSelector(
//     getProductState,
//     fromProduct.getProductError
// )
// export const getProductMessage = createSelector(
//     getProductState,
//     fromProduct.getProductMessage
// )
// //#endregion
