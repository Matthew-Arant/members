import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MemberService } from '../services/member-service.service';
import { CoreService } from './core.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(
    private _memberService: MemberService,
    private _coreService: CoreService,
    ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req)
    if (req.body) {
      if (req.body.firstName == "Pizza") {
        this._coreService.openSnackBar("Pizza Party!", "Party Time!")

        return next.handle(req)
      }
      
      return next.handle(req)
    }

    return next.handle(req)
  }

}