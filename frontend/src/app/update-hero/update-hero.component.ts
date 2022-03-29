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
  name:string | null = '';
  id: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private backend: BackendService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  async getHero(): Promise<void>{
    this.id = this.route.snapshot.paramMap.get("id"), 10;
    this.hero = await this.backend.getTheHero(this.id);
}
updateClass(heroClass: string){
  this.hero.class = heroClass;
}
updateName(heroName: string){
  this.hero.name = heroName;
}
updateLevel(heroLevel: number){
  this.hero.level = +heroLevel;
}

    async updateHero(): Promise<void>{
  await this.backend.updateTheHero(String(this.id),this.hero)
  }
  routerToHeroList()
    {
    if(confirm("Has the hero been updated correctly?")) {
     this.updateHero(); //create hero
    this.router.navigate(['/']); //main page
     }
    }

}

