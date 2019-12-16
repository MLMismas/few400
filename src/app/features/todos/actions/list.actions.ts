import { createAction, props } from '@ngrx/store';
import { TodoEntity } from '../reducers/list.reducer';

let tempId = 0;

export const listItemAdded = createAction(
  '[todos] list item added',
  ({ description }: { description: string }) => ({
    payload: {
      id: 'T' + tempId++,
      description,
      completed: false
    }
  })
);

export const listItemAddedSucceeded = createAction(
  '[todos] list item added successfully',
  props<{ oldId: string, payload: TodoEntity }>()
);

export const listItemAddedFailure = createAction(
  '[todos] list item added failure',
  props<{ message: string, payload: TodoEntity }>()
);

export const loadListData = createAction(
  '[todos] load list data'
);

export const loadListDataSucceeded = createAction(
  '[todos] load list data succeeded',
  props<{ payload: TodoEntity[] }>()
);

export const loadListDataFailure = createAction(
  '[todos] load list data failed',
  props<{ message: string }>()
);

export const gotTodoFromWebSocket = createAction(
  '[todos] got todo from websocket',
  props<{ payload: TodoEntity }>()
);
