import { ActionReducerMap } from '@ngrx/store';
import * as fromUser from './user.reducer';
export const featureName = 'authFeature';

export interface AuthState {
  user: fromUser.UserState;
}

export const reducers: ActionReducerMap<AuthState> = {
  user: fromUser.reducer
};
