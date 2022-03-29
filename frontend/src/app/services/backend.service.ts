import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Hero } from '../types/Hero';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor(private router: Router ,private http: HttpClient) { }

  /**
   * Gets a list of heroes from the backend API
   * 
   * @returns An array of heroes
   */
  getHeroes(): Promise<Hero[]> {
    return this.http.get<Hero[]>(`${environment.api}/heroes`).toPromise();
  }

/**
   * 
   * 
   * @param hero // create hero
   */
      createTheHero(hero: Hero): Promise<Hero>{
        return this.http.post<Hero>(`${environment.api}/heroes`, hero).toPromise();
      }
  
  //Responsible for actually getting a specific hero from the backend 

  async getTheHero(heroId: string | null): Promise<Hero>{
    return this.http.get<Hero>(`${environment.api}/heroes/${heroId}`).toPromise();
  }

  //This will be responsible for deleting the hero once we hit submit 
  // and confirm on the front end

  async deleteHero(heroId: string): Promise<Hero>{
    return this.http.delete<Hero>(`${environment.api}/heroes/${heroId}`).toPromise();
  }

  
  //This will be responsible for updating the hero once we hit submit on the front end

  updateTheHero(heroId: string, partialHero: Partial<Hero>): Promise<Hero>{
    return this.http.patch<Hero>(`${environment.api}/heroes/${heroId}`, partialHero).toPromise();
  }
}
