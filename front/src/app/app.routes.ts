import { Routes } from '@angular/router';

import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { BreedImagesComponent } from './breed-images/breed-images.component';
import { BreedDescriptionComponent } from './breed-description/breed-description.component';
import { Component } from '@angular/core';
import { NewsComponent } from './news/news.component';


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},

    {path: 'home',              component: HomeComponent,   title: 'ILoveDogs'},
    {path: 'search',            component: SearchComponent, title: 'Search'   },
    {path: 'news',              component: NewsComponent,   title: 'News'     },
    {path: 'signup',            component: SignupComponent, title: 'Login'    },
    {path: 'login',             component: LoginComponent,  title: 'Login'    },
    {path: 'home/:breed',       component: BreedImagesComponent               },
    {path: 'search/:itemName',  component:BreedDescriptionComponent           },
    
    {path: '**', redirectTo: 'home'}
];
