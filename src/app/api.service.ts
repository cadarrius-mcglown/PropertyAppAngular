import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export  class  APIService {
  API_URL  =  'http://realestateapi20180526112726.azurewebsites.net';
  constructor(private  httpClient:  HttpClient) {}
  getParcels(){
      return  this.httpClient.get(`${this.API_URL}/api/values`);
  }
}