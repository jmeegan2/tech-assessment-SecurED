import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  selectedHero?: Hero;

  heroes: Hero[] = [
  ];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  constructor(private backend: BackendService) { }

  async ngOnInit(): Promise<void> {
    // Gets a list of heroes to display
    this.heroes = await this.backend.getHeroes();
  }

  
}

