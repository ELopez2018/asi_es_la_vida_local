import { RequestModel } from '@models/request.model';
import { createAction, props } from '@ngrx/store';

export enum ReequestActionType {


  searchAll = '[Request Component] SearchAll',
  searchAllSuccess = '[Request Component] SearchAll Success',

  searchById = '[Request Component] SearchById',
  searchByIdSuccess = '[Request Component] searchByIdSuccess Success',

  assignRequest = '[Request Component] assignRequest',
  assignRequestSuccess = '[Request Component] assignRequestSuccess',

  requestError = '[Request Component] Error',
  requesMsg = '[Request Component] Message',
}


export const searchAllRequest = createAction(
  ReequestActionType.searchAll,
);

export const searchAllRequestSuccess = createAction(
  ReequestActionType.searchAllSuccess,
  props<{ requestAll: RequestModel[] }>()
);

export const searchById = createAction(
  ReequestActionType.searchById,
  props<{ id : number }>()
);
export const searchByIdSuccess = createAction(
  ReequestActionType.searchByIdSuccess,
  props<{ request: RequestModel }>()
);

export const assignRequest = createAction(
  ReequestActionType.assignRequest,
  props<{ request : RequestModel }>()
);

export const assignRequestSuccess = createAction(
  ReequestActionType.assignRequestSuccess,
  props<{ request: RequestModel }>()
);

export const requestError = createAction(
  ReequestActionType.requestError,
  props<{ error: string }>()
);

export const requesMsg = createAction(
  ReequestActionType.requesMsg,
  props<{ msg: string }>()
);
