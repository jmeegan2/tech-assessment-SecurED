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
  // it will send the specific hero information to the backend that has been changed
  /*
  Partial Constructs a type with all properties of Type set to optional. This utility will return a 
   type that represents all subsets of a given type.

   If we only want to update the Class we are able to do and not need to update the other fields 
   We are not forced to set every property from hero interface. 
  */

  updateTheHero(heroId: string, partialHero: Partial<Hero>): Promise<Hero>{
    return this.http.patch<Hero>(`${environment.api}/heroes/${heroId}`, partialHero).toPromise();
  }
}
