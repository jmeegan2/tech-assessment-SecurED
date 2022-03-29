import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Hero } from '../types/Hero';
import { BackendService } from '../services/backend.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: Hero | undefined;
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


// gets the specific hero from the backend

  async getHero(): Promise<void> {
    this.id = this.route.snapshot.paramMap.get("id");
    this.hero = await this.backendService.getTheHero(this.id);
  }

  //this will delete the hero and ask a confirmation before hand

  delete(hero: Hero): void {
    if (confirm("Are you sure you want to delete the Hero?")) {
      this.backendService.deleteHero(String(this.id));;
      this.router.navigate(['/']); //main page
    }

  }


}
