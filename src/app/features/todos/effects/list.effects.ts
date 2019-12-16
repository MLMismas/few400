import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import * as listActions from '../actions/list.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { TodoEntity } from '../reducers/list.reducer';
import { environment } from '../../../../environments/environment';
import { of } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class ListEffects {

  addItem$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.listItemAdded),
      switchMap(a => this.client.post<TodoEntity>(environment.todosUrl, { description: a.payload.description })
        .pipe(
          map(r => listActions.listItemAddedSucceeded({ oldId: a.payload.id, payload: r })),
          catchError(err => of(listActions.listItemAddedFailure({ message: err.message, payload: a.payload })))
        )
      )
    )
    , { dispatch: true });

  loadList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listActions.loadListData),
      switchMap(() => this.client.get<TodoEntity[]>(environment.todosUrl)
        .pipe(
          map(r => listActions.loadListDataSucceeded({ payload: r })),
          catchError(err => of(listActions.loadListDataFailure({ message: err.message })))
        )
      )
    )
    , { dispatch: true });

  constructor(private actions$: Actions, private client: HttpClient) { }
}
