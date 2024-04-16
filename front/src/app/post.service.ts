import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Breed, Parameters, Post, RandomFact} from './models';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private apiKey = 'NfmCl3WO5lBmMBGGs+Spgg==VGZTQS8hknPsIwBs'

  constructor(private client: HttpClient,) { }

  httpOptions = {
    headers: new HttpHeaders({
      'x-api-key' : this.apiKey
    })
  }

  getRandomFact(): Observable<RandomFact> {
    return this.client.get<RandomFact>('https://dog-api.kinduff.com/api/facts');
  }

  getRandomImage(): Observable<Post> {
    return this.client.get<Post>('https://dog.ceo/api/breeds/image/random');
  }

  getBreedImages(breed: string): Observable<Breed> {
    return this.client.get<Breed>(`https://dog.ceo/api/breed/${breed}/images`);
  }
  
  getAllDogs(energy: number): Observable<Parameters[]> {
    return this.client.get<Parameters[]>(
      `https://api.api-ninjas.com/v1/dogs?barking=${energy}`,
      {
        headers: this.httpOptions.headers
      }
    );
  }

  getDog(breedName: string): Observable<Parameters[]> {
    return this.client.get<Parameters[]>(
      `https://api.api-ninjas.com/v1/dogs?name=${breedName}`,
      {
        headers: this.httpOptions.headers
      }
    );
  }
}
