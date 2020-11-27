import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.css']
})
export class GenreComponent implements OnInit {

  listgenres: Genre[] = [];
  g: Genre = new Genre();
  imageSrc: string;
  constructor(private gs: GenreService , private router: Router) {
    
   }

  ngOnInit(): void {
    this.gs.getGenres().subscribe(
      (data:Genre[])=>{this.listgenres= data}, (err) => {
        console.log(err);
    }
    );
  }

  delete(id: number)
  {
    this.gs.deleteGenre(id).subscribe(resultat => {
      alert("Genre supprimé");
      this.router.navigateByUrl('/genres');
    }, (err) => {
      console.log(err);
  });
  }


}
