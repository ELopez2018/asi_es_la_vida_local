// import { Injectable } from '@angular/core';
// import * as fromAppRoot from '@reducers/index';
// import { Store } from '@ngrx/store';
// import { ApiActionModel } from '@models/common/api-action-model';
// import { environment } from '@environments/environment';
// import { authorizationActions } from '@actions/index';
// import { Observable } from 'rxjs';
// import { UserByGroupModel } from '@models/authorization/azure';
// import { ID_TOKEN, ScopeType, SCOPE_VIEW } from '@root/core/constants/authorization.constants';
// import { AZURE, PROVIDER } from '@root/core/constants/app.constants';
// import { ApiService } from '@services/api.service';
// import { CoordinatorACLModel } from '@root/shared/common-authorization/core/models/coordinator-acl.model';
// import { AuthorizationParams } from '@models/authorization/authorization-params.model';
// import { tap } from 'rxjs/operators';
// import { TOKEN_GRAPH_API } from '@root/core/constants/ad.constants';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthorizationFacadeService {



//   constructor(
//     private store: Store<fromAppRoot.State>,
//     private _apiService: ApiService<CoordinatorACLModel | CoordinatorACLModel[]>
//   ) { }

//   getCurrentUserGroups$() {
//     return this.store.select(fromAppRoot.getCurrentUserGroups);
//   }

//   getGroups$() {
//     return this.store.select(fromAppRoot.getGroups);
//   }

//   getAllowsByMenu(): Observable<CoordinatorACLModel[]> {

//     let obj: AuthorizationParams = {
//       applicationId: environment.oauthConfigMs.clientID,
//       tenantName: environment.TENANT_ID,
//       scopeCode: SCOPE_VIEW,
//       providerCode: JSON.parse(localStorage.getItem(PROVIDER)),
//     }
//     //TODO: Provisionalmente utilizar el token del localstorage con token idToken mientras
//     // utilizamos un selector
//     let idToken = localStorage.getItem(ID_TOKEN)

//     const action: ApiActionModel<AuthorizationParams> = {
//       url: environment.API_AUTHORIZATION + `/aclByMenu`,
//       payload: obj
//     }
//     return this._apiService.createGeneric$<AuthorizationParams, CoordinatorACLModel[]>(action, idToken).pipe(
//       // tap(x => console.log(x))
//     )
//   }

//   getAllowsByView(resourceCode: string): Observable<CoordinatorACLModel[]> {

//     let obj: AuthorizationParams = {
//       applicationId: environment.oauthConfigMs.clientID,
//       tenantName: environment.TENANT_ID,
//       resourceCode: resourceCode,
//       providerCode: JSON.parse(localStorage.getItem(PROVIDER)),
//     }
//     //TODO: Provisionalmente utilizar el token del localstorage con token idToken mientras
//     // utilizamos un selector
//     let idToken = localStorage.getItem(ID_TOKEN)

//     const action: ApiActionModel<AuthorizationParams> = {
//       url: environment.API_AUTHORIZATION + `/aclByView`,
//       payload: obj
//     }
//     return this._apiService.createGeneric$<AuthorizationParams, CoordinatorACLModel[]>(action, idToken).pipe(
//       // tap(x => console.log(x))
//     )
//   }

//   getMessages$(): Observable<string> {
//     return this.store
//       .select(fromAppRoot.getMessageManagement);
//   }

//   getError$(): Observable<string | null> {
//     return this.store
//       .select(fromAppRoot.getErrorManagement);
//   }

//   getUsersByGroups$() {
//     return this.store.select(fromAppRoot.getUsersByGroups);
//   }

//   getIsLoading$() {
//     return this.store.select(fromAppRoot.getLoadingAuthorization);
//   }

//   searchUsersByGroups(groupName: string) {
//     const action: ApiActionModel<void> = {
//       url: environment.API_AUTHORIZATION + `/GetUsersByGroup?applicationId=${environment.APPLICATION_ID}&groupName=${groupName}`
//     };

//     this.store.dispatch(authorizationActions.searchUsersByGroup({ action }));
//   }

//   searchGroupsByUser(userEmail: string) {
//     const action: ApiActionModel<UserByGroupModel> = {
//       url: environment.API_AUTHORIZATION + `/GetGroupsByUser?applicationId=${environment.APPLICATION_ID}`,
//       payload: {
//         UserEmail: userEmail
//       }
//     }

//     this.store.dispatch(authorizationActions.searchGroupsByUser({ action }));
//   }
// }
