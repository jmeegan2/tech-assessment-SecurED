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
     * The variable #heroLevel on the html page is listening for the (change) input and going to add the
     * value using this function to the createNewHero model we have, that will then get 
     * uploaded to the backend and show up on our list when createHero function is executed
     * 
     * The this keyword is refering to an object. So in this case its referring to the object createNewHero
     * defined above as a blank hero and its stating that the heroLevel input from the html page will
     * now be assigned to the createNewHero level value.
     * @param heroLevel 
     */
  addHeroLevel(heroLevel: number): void {
    this.createNewHero.level = heroLevel;
  }

  /**
   * name is added to the hero
    * The variable #heroName on the html page is listening for the (change) input and going to add the
     * value using this function to the createNewHero model we have, that will then get 
     * uploaded to the backend and show up on our list when createHero function is executed
     * 
     * The this keyword is refering to an object. So in this case its referring to the object createNewHero
     * defined above as a blank hero and its stating that the heroLevel input from the html page will
     * now be assigned to the createNewHero level value.
   * @param heroName 
   */

  addHeroName(heroName: string): void {
    this.createNewHero.name = heroName;

  }
  /**
   * class is added to the hero
   * 
   * @param heroClass 
   */

  addHeroClass(heroClass: string): void {
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


