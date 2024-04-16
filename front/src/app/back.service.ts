import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Heroes, News } from './models';

@Injectable({
  providedIn: 'root'
})

export class BackService {
  BASE_URL = 'http://localhost:8000'

  constructor(private client: HttpClient,) { }
  

  getHeroes(): Observable<Heroes[]> {
    return this.client.get<Heroes[]>(`${this.BASE_URL}/api/hero`);
  }

  getHero(id: number): Observable<Heroes> {
    return this.client.get<Heroes>(`${this.BASE_URL}/api/hero/${id}`);
  }

  getNews(): Observable<News[]> {
    return this.client.get<News[]>(`${this.BASE_URL}/api/news`);
  }
}
