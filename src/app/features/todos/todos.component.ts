import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState, selectAllTodos } from './reducers';
import { listItemAdded } from './actions/list.actions';
import { Observable } from 'rxjs';
import { TodoEntity } from './reducers/list.reducer';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  list$: Observable<TodoEntity[]>;

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
    this.list$ = this.store.select(selectAllTodos);
  }

  add(what: HTMLInputElement) {
    const description = what.value;
    this.store.dispatch(listItemAdded({ description }));
    what.value = '';
    what.focus();
  }

}
