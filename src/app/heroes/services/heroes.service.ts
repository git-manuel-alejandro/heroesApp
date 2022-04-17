import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../interfaces/heroes.interfaces';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private url: string = environment.url

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes`)
  }

  getHeroePorId(id: string): Observable<Heroe> {

    return this.http.get<Heroe>(`${this.url}/heroes/${id}`)
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${termino}&limit=6`)
  }
}
