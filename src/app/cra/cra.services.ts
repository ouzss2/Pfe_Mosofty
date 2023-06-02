import { Injectable } from '@angular/core';
import { GenericService } from '../generic.services';
 

import { Observable } from 'rxjs';
 
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class CraService extends GenericService{


  constructor(private http: HttpClient) {
    super();
  }
  public configuredMonth(): Observable<any>
  {
   
  
    return this.http
      .get<any>(this.apiFacturationUrl  +'/get-configured-month');
   
     // .pipe(retry(1), catchError(this.handleError)); 
  }

  public getCraMonth(): Observable<any>
  {
   
  
    return this.http
      .get<any>(this.apiMissionUrl  +'/activity-cra-month');
   
     // .pipe(retry(1), catchError(this.handleError)); 
  }

  public createCra(cra): Observable<any>
  {
 
   let header = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin':'*',
      'Accept': 'application/pdf'
       });
    let options = { headers: this.headers };
    //createFacturation
  
      return this.http
      .post<any>(this.apiFacturationUrl  +'/createFacturation',cra,options);
    return null;
  }

  download(cra): Observable<any> {
    return this.http.post(this.apiFacturationUrl  +'/createFacturation',cra, {
      responseType: 'blob'
    });
  }
   public getInactiveDays( ): Observable<any>
   {
    return this.http
    .get<any>(this.apiFacturationUrl  +'/listInactiveDays');
   }
}