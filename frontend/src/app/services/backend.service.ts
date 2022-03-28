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

  //for refrence 
  //   /**
  //    * Updates a hero by id in the database
  //    * 
  //    * @param {string} id The id of the hero to update
  //    * @param {Partial<Hero>} heroUpdates A partial hero object
  //    */
  //    updateHero(id, heroUpdates) {
  //     const hero = this.getHero(id);
  //     this.deleteHero(id);
  //     hero.updateHero(heroUpdates);
  //     this.createHero(hero);
  // }
  
  async getTheHero(heroId: string | null): Promise<Hero>{
    return this.http.get<Hero>(`${environment.api}/heroes/${heroId}`).toPromise();
  }

  async deleteHero(heroId: string): Promise<Hero>{
    return this.http.delete<Hero>(`${environment.api}/heroes/${heroId}`).toPromise();
  }

  //Havent even implemented yet
  updateTheHero(heroId: string, partialHero: Partial<Hero>): Promise<Hero>{
    return this.http.patch<Hero>(`${environment.api}/heroes/${heroId}`, partialHero).toPromise();
  }
}
