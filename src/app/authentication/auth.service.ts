import { Injectable } from '@angular/core';
import { GenericService } from '../generic.services';
import { Login } from './login-page/login.model';

import { Observable } from 'rxjs';
import { AuthenticatedUser } from './login-page/authenticated.user.model';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService extends GenericService{


  constructor(private http: HttpClient) {
    super();
  }
  public login(login: Login): Observable<any>
  {
   
  let options = { headers: this.headers};

    return this.http
      .post<any>(this.apiUrl + this.public+'/login',login,options);
   
     // .pipe(retry(1), catchError(this.handleError)); 
  }
}
