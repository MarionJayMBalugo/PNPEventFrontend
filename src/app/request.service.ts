import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private url = "http://localhost:8000/api";

  constructor( private httpClient:HttpClient) {

   };
   
  public sendGetRequest(url) {
    return this.httpClient.get(url);
  }

  public sendPostRequest(url,data) {
    this.url+=url;
    return this.httpClient.post(this.url,data);
  }
}
