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

  constructor(
    private backendService: BackendService,
    private router: Router) { }

  ngOnInit(): void {
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
   * name is added to the hero
   * 
   * @param heroName 
   */

  addName(heroName: string): void {
    this.createNewHero.name = heroName;

  }
  /**
   * class is added to the hero
   * 
   * @param heroClass 
   */

  addClass(heroClass: string): void {
    this.createNewHero.class = heroClass;

  }

  async createHero() {
    await this.backendService.createTheHero(this.createNewHero);
  }

  // this creates the hero and takes them back to mainpage with one click
  routerToHeroList() {
    if (confirm("Have all input fields been filled in?")) {
      this.createHero(); //create hero
      this.router.navigate(['/']); //main page
    }
  }
}


