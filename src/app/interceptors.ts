import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './authintercepter';
import { environment } from 'src/environments/environment';
import { LoggingInterceptor } from './logging.interceptor';
// ... any other interceptors you want to hook up

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];

if (!environment.production) {
  httpInterceptorProviders.push(
    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }
  );
}
