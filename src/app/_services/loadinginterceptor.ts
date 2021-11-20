import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, timeout, catchError } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(
        private spinner: NgxSpinnerService
     ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinner.show();

        console.log(req);
        
        return next.handle(req).pipe(tap(
  
            
            (event: HttpEvent<any>) => {
                // this.spinner.hide();
                if (event instanceof HttpResponse) {
                    this.spinner.hide();
                }
                else{
                    // this.spinner.hide();
                }
               
              
            }

        ));
    }
}
