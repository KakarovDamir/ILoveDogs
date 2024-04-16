import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Breed } from '../models';
import { PostService } from '../post.service';
import { ScrollToTopButtonComponent } from '../scroll-to-top-button/scroll-to-top-button.component';


@Component({
  selector: 'app-breed-images',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    ScrollToTopButtonComponent
  ],
  templateUrl: './breed-images.component.html',
  styleUrl: './breed-images.component.css'
})

export class BreedImagesComponent implements OnInit {
  breeds!:   Breed;
  images:    string[] = [];
  breed:     string ='';
  subBread:  string ='';
  breedName: string='';
  loaded:boolean = false;

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getBreedImages(this.route.snapshot.paramMap.get('breed')?.toLowerCase()!);
  }

  scrollToTop() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }

  getBreedImages(path: string) {
    this.loaded = false
    this.breedName = path.toUpperCase();

    if(path.includes("-")){
      this.breed = path.split("-")[0];
      this.subBread = path.split("-")[1];
      path = this.breed + "/" + this.subBread;
    }

    this.postService.getBreedImages(path).subscribe((image) =>{
      this.breeds = image;
      this.images = this.breeds.message;
      this.loaded = true
    })
  }

}
