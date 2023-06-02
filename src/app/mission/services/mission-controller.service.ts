/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MissionReceived } from '../models/mission-received';

@Injectable({
  providedIn: 'root',
})
export class MissionControllerService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation createMission
   */
  static readonly CreateMissionPath = '/create-mission';
  static readonly getAllMissionPath = '/all';
  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMission()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMission$Response(params: {
    body: MissionReceived
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionControllerService.CreateMissionPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
     
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }


  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `createMission()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  getAllMission$Response(): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, MissionControllerService.getAllMissionPath, 'get');
  

    return this.http.request(rb.build({
     
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `createMission$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  createMission(params: {
    body: MissionReceived
  }): Observable<void> {

    return this.createMission$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  getAllMissions()
  {

    return this.getAllMission$Response().pipe(
      map((r: StrictHttpResponse<void>) => r.body as any)
    );
  }

}
