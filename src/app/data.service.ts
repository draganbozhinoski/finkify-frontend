import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  getAllGenres():Observable<String[]> {
    return this.http.get<String[]>("/api/genres");
  }
  getSongs(genre:any):Observable<String[]> {
    return this.http.post<String[]>("/api/songs", {genre: genre});
  }
}
