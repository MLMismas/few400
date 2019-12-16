import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/list.actions';
import { loadListDataSucceeded } from '../actions/list.actions';

export interface TodoEntity {
  id: string;
  description: string;
  completed: boolean;
}

export interface State extends EntityState<TodoEntity> {

}

export const adapter = createEntityAdapter<TodoEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.listItemAdded, (state, action) => adapter.addOne(action.payload, state)),
  on(actions.loadListDataSucceeded, (state, action) => adapter.addAll(action.payload, state)),
  on(actions.listItemAddedSucceeded, (state, action) => {
    const tempState = adapter.removeOne(action.oldId, state);
    return adapter.addOne(action.payload, tempState);
  }),
  on(actions.listItemAddedFailure, (state, action) => adapter.removeOne(action.payload.id, state))
);

export function reducer(state: State = initialState, action: Action) {
  return reducerFunction(state, action);
}



