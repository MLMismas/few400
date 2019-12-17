import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState, selectCustomerIdFromRoute } from 'src/app/reducers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {

  customerId$: Observable<string>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.customerId$ = this.store.select(selectCustomerIdFromRoute);
  }

}
