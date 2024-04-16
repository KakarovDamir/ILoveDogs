import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ScrollToTopButtonComponent } from '../scroll-to-top-button/scroll-to-top-button.component';
import { BackService } from '../back.service';
import { News, Heroes } from '../models';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ScrollToTopButtonComponent
  ],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent implements OnInit {
  newsList: News[] = [];
  heroes: Heroes[]=[];
  loaded:boolean = false;

  constructor(
    private backService: BackService,
    private route: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.getNews();
    this.getHeroes();
  }

  getNews() {
    this.loaded = false;
    this.backService.getNews().subscribe((news) => {
      this.newsList = news;
      this.loaded = true;
    })
  }

  getHeroes() {
    this.backService.getHeroes().subscribe((heroes) => {
      this.heroes = heroes;
    })
  }

}
