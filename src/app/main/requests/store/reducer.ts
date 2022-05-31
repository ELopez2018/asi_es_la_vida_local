
import { RequestModel } from '@models/request.model';

import { Action, createReducer, on } from '@ngrx/store';
import { RequestActions } from '@root/core/store/actions.index';




export interface State {
  request: RequestModel | null;
  requestAll: RequestModel[] | null;
  error: string | null;
  loading: boolean;
  message: string | null;
}

export const initialState: State = {
  request: null,
  requestAll: [],
  error: null,
  loading: false,
  message: null,
};

const RequestReducer = createReducer(
  initialState,
  on(RequestActions.searchById, state => ({
    ...state,
    loading: true,
    error: null,
    message: null,
  })),
  on(RequestActions.searchByIdSuccess, (state, { request }) => ({
    ...state,
    loading: false,
    error: null,
    message: null,
    request
  })),
  on(RequestActions.searchAllRequest, (state) => {
    return {
      ...state,
      loading: true,
      error: null,
    };
  }),
  on(RequestActions.searchAllRequestSuccess, (state, { requestAll }) => ({
    ...state,
    loading: false,
    error: null,
    message: null,
    requestAll
  })),
  on(RequestActions.assignRequest, (state,{ request }) => ({
    ...state,
    loading: true,
    error: null,
    request
  })),
  on(RequestActions.assignRequestSuccess, (state,{ request }) => ({
    ...state,
    loading: false,
    error: null,
    request
  })),

  on(RequestActions.requestError, (state, { error }) => {
    return  {
      ...state,
      loading: false,
      error
    };
  }),
  on(RequestActions.requesMsg, (state, { msg }) => ({
    ...state,
    loading: false,
    error: null,
    message: msg
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return RequestReducer(state, action);
}
export const getRequestError = (state: State) => state.error;
export const getRequestMessage = (state: State) => state.message;
export const getRequestLoading = (state: State) => state.loading;

export const getRequest = (state: State) => state.request;
export const getRequestAll = (state: State) => state.requestAll;
