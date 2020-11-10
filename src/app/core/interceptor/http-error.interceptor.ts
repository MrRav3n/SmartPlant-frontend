import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
export const InterceptorSkipHeader = 'X-Skip-Interceptor';

export class HttpErrorInterceptor implements HttpInterceptor {
  constructor(
  ) {
  }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.headers.has(InterceptorSkipHeader)) {
      const headers = request.headers.delete(InterceptorSkipHeader);
      return next.handle(request.clone({ headers }));
    }

    return next.handle(request)
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          let errorTitle = '';
          let errorMessage = '';
          console.log(error);
          if (error.error) {
            errorTitle = error.error.err;
            errorMessage = error.error.desc;
     
          } else {
            errorTitle = `Kod błędu: ${error.status}`;
            errorMessage = `Wiadomość: ${error.message}`;
           
          }
          return throwError(errorMessage);
        })
      );
  }
}
