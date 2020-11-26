import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';

@Component({
  selector: 'app-add-genre',
  templateUrl: './add-genre.component.html',
  styleUrls: ['./add-genre.component.css']
})
export class AddGenreComponent implements OnInit {

  listGenre: Genre[] = [];
  
  g: Genre = new Genre();
  
  constructor(private genre_service: GenreService, private router:Router) { 

  }

  ngOnInit(): void {
  }

  save(){ this.genre_service.addGenre(this.g).subscribe(
    resultat => {
      console.log("genre added");
      //this.router.navigateByUrl('/genres');
    }, (err) => {
      console.log(err);
    }
  )
}

}
