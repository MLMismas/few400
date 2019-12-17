import { CanActivate } from '@angular/router';
import { AuthService } from './features/auth/services/auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate {

  canActivate() {
    return this.authService.isLoggedIn$;
  }
  constructor(private authService: AuthService) { }
}
