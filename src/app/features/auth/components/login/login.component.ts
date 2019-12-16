import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState, selectUserIsLoggedIn, selectLoggedInUserName } from '../../reducers';
import { Store } from '@ngrx/store';
import { loginRequest, logoutRequested } from '../../actions/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  userName$: Observable<string>;

  constructor(private store: Store<AuthState>) { }

  ngOnInit() {
    this.isLoggedIn$ = this.store.select(selectUserIsLoggedIn);
    this.userName$ = this.store.select(selectLoggedInUserName);
  }

  login(usernameEl: HTMLInputElement, passwordEl: HTMLInputElement) {
    const username = usernameEl.value;
    const password = passwordEl.value;
    this.store.dispatch(loginRequest({ username, password }));

    usernameEl.value = '';
    passwordEl.value = '';
  }
  logout() {
    this.store.dispatch(logoutRequested());
  }

}
