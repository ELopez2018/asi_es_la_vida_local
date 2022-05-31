import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AuthenticateModel } from '@models/security/authenticate.model';
import { UserModel } from '@models/user.model';
import * as fromAppRoot from '@root/core/store/reducer.index';
import { AuthActions } from '@root/core/store/actions.index';
import { LocalStorageService } from '@services/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthFacadeService {
  constructor(
    private store: Store<fromAppRoot.State>,
    private localStorageService: LocalStorageService,
    private router: Router
  ) {}

  setUser(user: UserModel) {
    this.store.dispatch(AuthActions.setUser({ user }));
  }
  getErrorLogin$(): Observable<string | null> {
    return this.store.select(fromAppRoot.getLoginError);
  }
  getCurrentUser$(): Observable<UserModel | null> {
    return this.store.select(fromAppRoot.getAuthUser);
  }
  isLoggedIn$(): Observable<boolean> {
    return this.store.select(fromAppRoot.getLoggedIn);
  }
  isLoadingAuth$(): Observable<boolean> {
    return this.store.select(fromAppRoot.getAuthLoading);
  }
  login(credential: AuthenticateModel) {
    // console.log('paso 2 facade');
    this.store.dispatch(AuthActions.Login({ credential }));
  }
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    this.router.navigate(['/auth']);
    this.store.dispatch(AuthActions.Logout());
  }
}
