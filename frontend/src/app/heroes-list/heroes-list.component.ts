import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

  heroes: Hero[] = [
  //  { id: "1",
  //   name: "James Meegan",
  //   class: "2023",
  //   level: 3,
  //  }
  ];

  constructor(private backend: BackendService) { }

  async ngOnInit(): Promise<void> {
    // Gets a list of heroes to display
    this.heroes = await this.backend.getHeroes();
  }

}
