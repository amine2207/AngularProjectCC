import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { GenreService } from '../shared/genre.service';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-update-jeu-component',
  templateUrl: './update-jeu-component.component.html',
  styleUrls: ['./update-jeu-component.component.css']
})
export class UpdateJeuComponentComponent implements OnInit {

  listgenres: Genre[] = [];
  g: Genre= new Genre();
  constructor(private js: JeuxService , private gs : GenreService , private router: Router) { }


  ngOnInit(): void {
  }

}
