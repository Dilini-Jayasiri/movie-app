import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { MoviesHomeComponent } from './component/movies-home/movies-home.component';


const routes: Routes = [
  { path: '', component: MoviesHomeComponent},
  { path: 'addMovie', component: AddMovieComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
