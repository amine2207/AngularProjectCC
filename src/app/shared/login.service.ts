import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { reader } from '../model/reader';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  list: reader[] = [];
  i: number = 0;
  url: string = "http://localhost:3000/reader";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    for (this.i = 0; this.i < this.list.length; this.i++)
      if ((this.list[this.i].username != username && this.list[this.i].motdepasse == null)) {
        alert("Erreur");

      }
    return this.http.post<reader>(this.url, [username, password], this.httpOptions);
  }

}