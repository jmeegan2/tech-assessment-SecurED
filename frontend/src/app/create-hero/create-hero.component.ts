import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../services/backend.service';
import { Hero } from '../types/Hero';


@Component({
  selector: 'app-create-hero',
  templateUrl: './create-hero.component.html',
  styleUrls: ['./create-hero.component.css']
})
export class CreateHeroComponent implements OnInit {

  createHero: Hero = {
    id: "", 
    name: "",
    class: '',
    level: 0
  }
  constructor(private backend: BackendService, private router:Router) { }

  ngOnInit(): void {
  }

  // Add Id not needed

  // 
}
