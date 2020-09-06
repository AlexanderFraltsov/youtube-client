import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeInterceptor implements HttpInterceptor {
  public intercept(
    request: HttpRequest<string>,
    next: HttpHandler
  ): Observable<HttpEvent<string>> {

    return next.handle(
      request.clone({
        url: `${environment.YOUTUBE_URL}${request.url}`,
        setParams: {
          key: environment.API_KEY,
        }
      })
    );
  }
}
