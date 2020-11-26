import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddGenreComponent } from './add-genre/add-genre.component';
import { AppComponent } from './app.component';
import { FeedBackComponent } from './feed-back/feed-back.component';
import { GenreComponent } from './genre/genre.component';
import { JeuxComponent } from './jeux/jeux.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: 'genres', component: GenreComponent },
  { path: 'jeux', component: JeuxComponent },
  { path: 'feedback', component: FeedBackComponent },
  { path: 'add-genre', component: AddGenreComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
