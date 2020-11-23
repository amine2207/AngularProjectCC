import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reader } from '../model/reader';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {

  url: string = "http://localhost:3000/reader";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }

  Subscribe_Reader(reader: reader): Observable<reader>{
    return this.http.post<reader>(this.url, reader, this.httpOptions);
  }
}
