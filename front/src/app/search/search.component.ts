import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, ActivatedRoute } from '@angular/router';

import { ScrollToTopButtonComponent } from '../scroll-to-top-button/scroll-to-top-button.component';
import { Parameters } from '../models';
import { PostService } from '../post.service';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FormsModule, 
    ScrollToTopButtonComponent
  ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent implements OnInit{
  parameters: Parameters[] = [];
  energies: number[] = [3, 4, 5];
  loaded:boolean = false;

  filteredItems: any[] = [];
  searchQuery: string = '';
  searched: boolean = false;

  constructor(
    private postService: PostService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.getAllDogsForAllEnergies();
    this.parameters.sort();
  }

  getAllDogsForAllEnergies() {
    for (let energy of this.energies) {
      this.getAllDogs(energy);
    }
  }

  getAllDogs(energy: number){
    this.loaded = false

    this.postService.getAllDogs(energy).subscribe((param) =>
    {
      this.parameters = this.parameters.concat(param);
      this.loaded = true
    })
  }

  search(): void {
    this.filteredItems = this.parameters.filter(param => 
      param.name.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
    
    if(this.searchQuery == ""){
      this.searched = false;
    }
    else{
      this.searched = true;
    }
  }
  
}
