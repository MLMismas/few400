import { Action, createReducer, on } from '@ngrx/store';
import * as actions from '../actions/user.actions';

export interface UserState {
  name: string;
  isLoggedIn: boolean;
}

const initialState: UserState = {
  name: null,
  isLoggedIn: false
};

export function reducer(state: UserState = initialState, action: Action): UserState {
  return myReducer(state, action);
}

const myReducer = createReducer(
  initialState,
  on(actions.loginRequestSuccessed, (state, action) => ({ name: action.username, isLoggedIn: true })),
  on(actions.loginRequestFailed, (state, action) => initialState),
  on(actions.logoutRequested, () => initialState)
);
