import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';


@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {


  createNewHero: Hero =
    {
      id: "",
      name: "",
      class: "",
      level: 0
    };
  
  constructor(private backend: BackendService, private router: Router) { }

  ngOnInit(): void {
  }
  /**
   * name is added to the hero
   * 
   * @param heroName Name of the hero
   */
  
  addName(heroName: string): void {
    this.createNewHero.name = heroName;

  }
  /**
   * class is added to the hero
   * 
   * @param heroClass Class of the hero
   */
  
  addClass(heroClass: string): void {
    this.createNewHero.class = heroClass;

  }

  /**
   * level is added to the hero
   * 
   * @param heroLevel 
   */
  addLevel(heroLevel: number): void {
    this.createNewHero.level = heroLevel;

  }

  /**
   * create the hero
   */
  async createHero() {
    await this.backend.createTheHero(this.createNewHero);
  }

  // this create hero and take them back to mainpage with one click
  routerToHeroList() {
    this.createHero(); //create hero
    this.router.navigate(['/']); //main page

  }
}

