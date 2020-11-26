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

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    GenreComponent,
    JeuxComponent,
    FeedBackComponent,
    AddGenreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
