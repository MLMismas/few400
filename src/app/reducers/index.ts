import * as fromRouter from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface AppState {

  router: fromRouter.RouterState.Minimal;
}

export const reducers = {
  router: fromRouter.routerReducer
};

const selectRouter = createFeatureSelector<
  AppState,
  fromRouter.RouterReducerState
>('router');

export const selectTheUrlTheHardWay = createSelector(selectRouter, r => r.state.url);

export const {
  selectCurrentRoute, // uh, the current route,
  selectQueryParam, // 'factory selector' that lets look up the a query parameter
  selectQueryParams, // return all the query parameters
  selectRouteData, // the data on the route
  selectUrl, // the current url according the the router
  selectRouteParam, // a factory select that gives you the value of a route parameter
  selectRouteParams // of of them suckers
} = fromRouter.getSelectors(selectRouter);

export const selectTodoId = selectRouteParam('id');
export const selectPageNumber = selectQueryParam('page');

export const selectCustomerIdFromRoute = selectRouteParam('customerId');
