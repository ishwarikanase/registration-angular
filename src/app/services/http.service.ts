import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  readonly baseURL: string = "http://localhost:8080/registration/";
  headers: HttpHeaders;

  constructor(
    private http: HttpClient,
  ) { }

  getServiceCall(url: string, sendToken: boolean) {
    if (sendToken) {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    return this.http.get(this.baseURL + url, {
      headers: this.headers
    });
  }


  postServiceCall(url: string, body, sendToken: boolean) {
    if (sendToken) {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    return this.http.post(this.baseURL + url, body, {
      headers: this.headers
    });
  }

  putServiceCall(url: string, body, sendToken: boolean) {
    if (sendToken) {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json",
      });
    }
    else {
      this.headers = new HttpHeaders({
        "Content-Type": "application/json"
      });
    }
    return this.http.put(this.baseURL + url, body, {
      headers: this.headers
    });
  }
}
