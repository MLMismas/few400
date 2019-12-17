import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse } from '@angular/common/http';
import { filter, tap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler) {

    const idToken = localStorage.getItem('token'); // token || null

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + idToken)
      });

      return next.handle(cloned).pipe( // runs when we make any authorized call
        filter(r => r instanceof HttpResponse),
        tap((r: HttpResponse<any>) => console.log(`Made an Authorized request to ${r.url} and got ${r.status} / ${r.statusText}`))
      );
    } else {
      return next.handle(req).pipe(
        filter(r => r instanceof HttpResponse),
        tap((r: HttpResponse<any>) => console.warn(`Made an Unauthorized request to ${r.url} and got ${r.status} / ${r.statusText}`))
      );
    }
  }

}
