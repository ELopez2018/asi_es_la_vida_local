import { AuthenticateModel } from '@models/security/authenticate.model';
import { UserModel } from '@models/user.model';
import { createAction, props } from '@ngrx/store';

export enum LoginActionType {
  Load = '[Login Component] Load',

  Login = '[Login Component]Login',
  LoginSuccess = '[Login Component] Login Success',

  Logout = '[Login Component]Logout',
  LogoutSuccess = '[Login Component]Logout Success',

  loginError = '[Login Component] Login Error',
  loginMsg = '[Login Component] Login Message',

  setUser = '[Login Component] Login Set User ',
}

export const load = createAction(LoginActionType.Load);
export const Login = createAction(
  LoginActionType.Login,
  props<{ credential : AuthenticateModel }>()
);

export const LoginSuccess = createAction(
  LoginActionType.LoginSuccess,
  props<{ user: UserModel }>()
);

export const Logout = createAction(LoginActionType.Logout);

export const LogoutSuccess = createAction(
  LoginActionType.LogoutSuccess,
  props<{ msg: string }>()
);

export const loginError = createAction(
  LoginActionType.loginError,
  props<{ error: string }>()
);

export const loginMsg = createAction(
  LoginActionType.loginMsg,
  props<{ msg: string }>()
);


export const setUser = createAction(
  LoginActionType.setUser,
  props<{ user: UserModel }>()
);
