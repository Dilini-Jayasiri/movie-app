import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolBarComponent } from './component/tool-bar/tool-bar.component';
import { MoviesHomeComponent } from './component/movies-home/movies-home.component';
import { AddMovieComponent } from './component/add-movie/add-movie.component';
import { ButtonComponent } from './component/button/button.component';
import { MovieTileComponent } from './component/movie-tile/movie-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolBarComponent,
    MoviesHomeComponent,
    AddMovieComponent,
    ButtonComponent,
    MovieTileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
