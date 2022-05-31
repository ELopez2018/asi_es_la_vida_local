
import { UserModel } from '@models/user.model';
import { Action, createReducer, on } from '@ngrx/store';
import { AuthActions } from '@root/core/store/actions.index';




export interface State {
  user: UserModel | null;
  error: string | null;
  loading: boolean;
  message: string | null;
  loggedIn: boolean;
}

export const initialState: State = {
  user: null,
  error: null,
  loading: false,
  message: null,
  loggedIn: false
};

const AuthReducer = createReducer(
  initialState,
  on(AuthActions.load, state => ({
    ...state,
    loading: true,
    error: null,
    message: null,
  })),
  on(AuthActions.Login, (state) => ({
    ...state,
    loading: true,
    error: null,
    message: null,
  })),
  on(AuthActions.LoginSuccess, (state, { user }) => {
    return {
      ...state,
      user,
      loading: false,
      error: null,
      message: 'Usuario autenticado',
      loggedIn: true
    };
  }),
  on(AuthActions.setUser, (state, { user }) => {
    return {
      ...state,
      user,
      loading: false,
      error: null,
      message: 'Usuario autenticado',
      loggedIn: true
    };
  }),
  on(AuthActions.Logout, state => ({
    ...state,
    loading: true,
    error: null,
    message: null,
    user: null,
    loggedIn: false
  })),
  on(AuthActions.LogoutSuccess, (state,{ msg }) => ({
    ...state,
    user: null,
    loading: false,
    error: null,
    message: msg,
    loggedIn: false
  })),
  on(AuthActions.loginError, (state, { error }) => {
    return  {
      ...state,
      loading: false,
      error
    };
  }),
  on(AuthActions.loginMsg, (state, { msg }) => ({
    ...state,
    loading: false,
    error: null,
    message: msg
  })),

);

export function reducer(state: State | undefined, action: Action) {
  return AuthReducer(state, action);
}
export const getLoginError = (state: State) => state.error;
export const getLoginMessage = (state: State) => state.message;
export const getAuthUser = (state: State) => state.user;
export const getLoggedIn = (state: State) => state.loggedIn;
export const getAuthLoading = (state: State) => state.loading;
