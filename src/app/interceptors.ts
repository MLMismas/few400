import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authintercepter';
// ... any other interceptors you want to hook up

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
