import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route,
  UrlSegment,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  CanActivate,
  Router,
} from '@angular/router';
import { UserFacadeService } from '@facades/auth/user-facade.service';
import { AuthFacadeService } from '@root/auth/login/auth.facade.service';
import { Observable, of, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  subs: Subscription = new Subscription();
  user: any;
  constructor(private authFacade: AuthFacadeService, private router: Router) {}
  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFacade.isLoggedIn$().pipe(
      map((value) => {
        if (value) {
          return true;
        }
        this.router.navigate(['/auth']);
        return false;
      })
    );
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authFacade.isLoggedIn$();
  }
}

// export class AuthGuard implements CanActivate, CanLoad {
//   constructor(
//     private authFacade: AuthFacadeService,
//     private router: Router,
//     private _localStorage: LocalStorageService,
//     @Inject('AuthServiceInterface') private authService: AuthService,
//   ) { }
//   canLoad(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> | Promise<boolean> {
//     return this.authFacade.isLoggedIn$()
//   }
//   canActivate(): Observable<boolean> | Promise<boolean> | boolean {
//     const provider = environment.CACHE == 'sessionStorage' ? sessionStorage.getItem(appConstants.PROVIDER) : localStorage.getItem(appConstants.PROVIDER)
//     return this.authFacade.isLoggedIn$().pipe(
//       map(value => {
//         if (value) {
//           return true
//         }
//         this.router.navigate(['/auth'])
//         return false
//       })
//     )

//   }

// }
