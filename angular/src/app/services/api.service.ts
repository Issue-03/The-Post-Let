import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "localhost:3000";

  constructor(private http: HttpClient) { }

  private successHandler(value) { return value; }
  private errorHandler(error) { return error; }

  public makeRequest(requestObj): any {
    let method = requestObj.method.toLowerCase();
    if (!method) { return console.log("No location specified in the request object."); }

    let body = requestObj.body || {};
    let location = requestObj.location;
    if (!location) { return console.log("No location specified in the request object."); }

    let url = `${this.baseUrl}/${location}`;

    let httpOptions = {};

    if (method === "get") {
      return this.http.get(url, httpOptions).toPromise()
        .then(this.successHandler)
        .catch(this.errorHandler);
    }
    if (method === "post") {
      return this.http.post(url, body, httpOptions).toPromise()
        .then(this.successHandler)
        .catch(this.errorHandler);
    }

    console.log("Could not make the request. Make sure a method of GET or POST is supplied.");
  }
}
