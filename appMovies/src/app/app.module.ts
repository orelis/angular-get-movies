import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { KeyPipe } from './pipes/key.pipe';
import { EditPopupComponent } from './edit-popup/edit-popup.component';
import { DeletePopupComponent } from './delete-popup/delete-popup.component';
import { AddMovieComponent } from './add-movie/add-movie.component'

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    KeyPipe,
    EditPopupComponent,
    DeletePopupComponent,
    AddMovieComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
