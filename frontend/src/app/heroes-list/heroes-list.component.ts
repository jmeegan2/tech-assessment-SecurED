import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  // Didn't have to anything here I don't think 

  heroes: Hero[] = [
  ];

  constructor(private backend: BackendService) { }

  async ngOnInit(): Promise<void> {
    // Gets a list of heroes to display
    this.heroes = await this.backend.getHeroes();
  }

  
}

