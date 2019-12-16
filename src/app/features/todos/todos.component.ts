import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { TodosState } from './reducers';
import { listItemAdded } from './actions/list.actions';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  constructor(private store: Store<TodosState>) { }

  ngOnInit() {
  }

  add(what: HTMLInputElement) {
    const description = what.value;
    this.store.dispatch(listItemAdded({ description }));
    what.value = '';
    what.focus();
  }

}
