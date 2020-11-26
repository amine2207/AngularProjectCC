import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from '../model/Genre';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  genreUrl = "http://localhost:3000/genre";
  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
  }
  constructor(private http: HttpClient) { }

  addGenre(genre: Genre): Observable<Genre>
  {
    return this.http.post<Genre>(this.genreUrl, genre, this.httpOptions);
  }
}
