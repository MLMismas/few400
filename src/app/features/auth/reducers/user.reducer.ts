import { Action, createReducer } from '@ngrx/store';

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
  initialState
);
