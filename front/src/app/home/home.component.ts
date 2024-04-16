import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PostService } from '../post.service';
import { Post, RandomFact, RandomImage } from '../models';
import { ScrollToTopButtonComponent } from '../scroll-to-top-button/scroll-to-top-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    ScrollToTopButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {
  randomImage!: RandomImage;
  randomFact!: RandomFact;
  randomDog!: Post;
  breed: string='';


  constructor(private postService: PostService) { }

  ngOnInit() {
    this.getRandomFact();
    this.getRandomDog();
  }

  getRandomFact(){
    this.postService.getRandomFact().subscribe((fact) =>
    {
      this.randomFact = fact;
    })
  }

  getRandomDog(){
    this.postService.getRandomImage().subscribe((dog) =>
    {
      this.randomDog = dog;
      this.breed = this.randomDog.message.split("/")[4].toUpperCase();
    })
  }

}
