import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Hero } from '../types/Hero';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  @Input() hero: Hero | undefined;
  

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }



}
