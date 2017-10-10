import { Injectable } from '@angular/core';
// import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes'; // URL to web api

  constructor(private http: HttpClient) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(data => data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(data => data as Hero)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
