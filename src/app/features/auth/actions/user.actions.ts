import { createAction, props } from '@ngrx/store';

export const loginRequest = createAction(
  '[auth] login requested',
  props<{ username: string, password: string }>()
);

export const loginRequestSuccessed = createAction(
  '[auth] login request succeeded',
  props<{ username: string, token: string }>()
);

export const loginRequestFailed = createAction(
  '[auth] login request failed',
  props<{ message: string }>()
);

export const logoutRequested = createAction(
  '[auth] log out requested'
);
