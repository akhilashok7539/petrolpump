import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiservicesService {
  private httpOptions: any;
  SERVER_URL = "https://petrol-pump-server.herokuapp.com/petrolpump/api/v1/";
  constructor( private http: HttpClient) { }
  
  // general get service
  public doGetRequest(url: any) {
    return this.http.get<any>(this.SERVER_URL + url);
  }

  // general post service
  public doPostRequest(url: any, data: any) {
    console.log(data);
    
    return this.http.post<any>(this.SERVER_URL + url, data, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }

  public doPostRequest_upload(url: any, data: any) {
 
    return this.http.post<any>(this.SERVER_URL + url, data).pipe(
      map((response) => {
        return response
      }),
    )
  }
  public doPutRequest(url: any, data: any) {
   
    return this.http.put<any>(this.SERVER_URL + url, data).pipe(
      map((response) => {
        return response
      }),
    )
  }
  dodeleteRequest(url: any)
  {
    return this.http.delete<any>(this.SERVER_URL + url, this.httpOptions).pipe(
      map((response) => {
        return response;
      }),
    );
  }
}
