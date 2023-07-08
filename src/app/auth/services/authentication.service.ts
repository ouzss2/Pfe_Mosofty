/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthRequest } from '../models/auth-request';
import { CreateUserRequest } from '../models/create-user-request';
import { UserView } from '../models/user-view';
import { ApiConfiguration } from 'src/app/api/api-configuration';
import { BaseService } from 'src/app/api/base-service';
import { StrictHttpResponse } from 'src/app/api/strict-http-response';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService extends BaseService {
 // rootUrl: string;
  http: any;
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation register
   */
  static readonly RegisterPath = '/api/public/register';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `register()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register$Response(params: {
    body: CreateUserRequest
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder(this.rootUrl, AuthenticationService.RegisterPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'blob',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `register$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  register(params: {
    body: CreateUserRequest
  }): Observable<UserView> {

    return this.register$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

  /**
   * Path part for operation login
   */
  static readonly LoginPath = '/api/public/login';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `login()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login$Response(params: {
    body: AuthRequest
  }): Observable<StrictHttpResponse<UserView>> {

    const rb = new RequestBuilder("http://localhost:9001", AuthenticationService.LoginPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({      
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<UserView>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `login$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  login(params: {
    body: AuthRequest
  }): Observable<UserView> {

    return this.login$Response(params).pipe(
      map((r: StrictHttpResponse<UserView>) => r.body as UserView)
    );
  }

}
