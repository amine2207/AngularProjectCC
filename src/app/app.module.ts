import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { GenreComponent } from './genre/genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { UpdateGenreComponent } from './update-genre/update-genre.component';
import { NgSrcModule } from 'ng-src';
import { AddJeuComponent } from './add-jeu/add-jeu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GenreComponent,
    JeuxComponent,
    FeedBackComponent,
    AddGenreComponent,
    UpdateGenreComponent,
    AddJeuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSrcModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
