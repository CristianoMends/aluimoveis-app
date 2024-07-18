import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) { }

  private apiUrl = 'https://aluimoveis-api-production.up.railway.app/post/search';


  getPosts(): Observable<Post[]> {
    let params = new HttpParams().set('', '');

    return this.http.get<Post[]>(`${this.apiUrl}`);
  }
}