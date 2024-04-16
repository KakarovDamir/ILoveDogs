import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PostService } from '../post.service';
import { Parameters } from '../models';
import { ScrollToTopButtonComponent } from '../scroll-to-top-button/scroll-to-top-button.component';


@Component({
  selector: 'app-breed-description',
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule, 
    FormsModule, 
    ScrollToTopButtonComponent
  ],
  templateUrl: './breed-description.component.html',
  styleUrl: './breed-description.component.css'
})

export class BreedDescriptionComponent  implements OnInit {
  item!: Parameters[];
  loaded:boolean = false;

  constructor(
    private postService: PostService, 
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getItem(this.route.snapshot.paramMap.get('itemName')?.toLowerCase()!);
  }

  getItem(path: string): void {
    this.loaded = false;
    this.postService.getDog(path).subscribe(item => {
      this.item = item;
      this.loaded = true;
    });
  }
}
