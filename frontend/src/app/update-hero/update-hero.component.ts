import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Hero } from '../types/Hero';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-hero',
  templateUrl: './update-hero.component.html',
  styleUrls: ['./update-hero.component.css']
})
export class UpdateHeroComponent implements OnInit {

  @Input() hero: Partial<Hero> = {};
  name: string | null = '';
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private backendService: BackendService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getHero();
  }

  //  So I decided to display the hero details while the user updated so
  //  they would see what they were changing in real time 
  //  I just took this from hero-details component, thats what I used
  // this function for

  async getHero(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get("id"), 10;
    this.hero = await this.backendService.getTheHero(this.id);
  }
  //The three functions below are responsible for updating the hero with
  //the new class, name, and level.

  updatedClassValue(heroClass: string) {
    this.hero.class = heroClass;
  }
  updatedNameValue(heroName: string) {
    this.hero.name = heroName;
  }
  updatedLevelValue(heroLevel: number) {
    this.hero.level = +heroLevel;
  }

  //Responsible for updating the hero and sending the data to the backend 

  async updateHero(): Promise<void> {
    await this.backendService.updateTheHero(String(this.id), this.hero)
  }

  // This is what I use to run the updateHero function and take me back
  // to the main page on click of the button

  routerToHeroList() {
    if (confirm("Has the hero been updated correctly?")) {
      this.updateHero(); //create hero
      this.router.navigate(['/']); //main page
    }
  }

}

