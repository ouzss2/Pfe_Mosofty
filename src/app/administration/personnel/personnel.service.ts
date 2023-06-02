import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { filter, map } from "rxjs/operators";
import { ApiConfiguration } from "src/app/api/api-configuration";
import { BaseService } from "src/app/api/base-service";
import { StrictHttpResponse } from "src/app/api/strict-http-response";
import { CreateUserRequest, UserView, AuthRequest } from "src/app/auth/models-auth";
import { RequestBuilder } from "src/app/auth/request-builder";
import { GenericService } from "src/app/generic.services";

@Injectable()
export class PersonnelParametersService extends GenericService{


  constructor(private http: HttpClient) {
    super();
  }
   

  public parameterPersonnel(coordonee:any): Observable<any>
  {
    let options = { headers: this.headers};
    //createFacturation
  
      return this.http
      .put<any>(this.apiUrl  +'/parameter/user'+'/update-compte',coordonee,options);
    return null;
  }

    
}