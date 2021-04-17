import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroes } from '../models/heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  public baseApi = 'http://localhost:3000/heroes';

  constructor(private http: HttpClient) {}

  public createHero(model: Heroes) {
    return this.http.post(this.baseApi, model);
  }

  public changeHero(model: Heroes) {
    return this.http.put(this.baseApi + '/' + model.id, model);
  }

  public deleteHero(model: Heroes) {
    return this.http.delete(this.baseApi + '/' + model.id);
  }

  public getAllHeroes(): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(this.baseApi + '?_sort=id&_order=asc');
  }

  public getById(id: number): Observable<Heroes> {
    return this.http.get<Heroes>(this.baseApi + id);
  }

  public sortByHeroes(sortfield: string): Observable<Heroes[]> {
    return this.http.get<Heroes[]>(
      `${this.baseApi}?_sort=${sortfield}&_order=asc`
    );
  }
}
