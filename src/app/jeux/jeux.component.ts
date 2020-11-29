import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Genre } from '../model/Genre';
import { Jeux } from '../model/jeux';
import { GenreService } from '../shared/genre.service';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.component.html',
  styleUrls: ['./jeux.component.css']
})
export class JeuxComponent implements OnInit {
  @Output() add = new EventEmitter<Jeux>();

  jeux_form: FormBuilder = new FormBuilder();
  jeux_group: FormGroup;
  listgenres: Genre[] = [];
  g: Genre = new Genre();
  
  listjeu: Jeux[] = [];
  constructor(private js: JeuxService, private router: Router, private gs:GenreService) {
    this.jeux_group = this.jeux_form.group({
      id: new FormControl('', Validators.required),
      nom: new FormControl('', [Validators.required, Validators.pattern("[a-z][A-Z]*")]),
      description: new FormControl('', Validators.pattern("[a-z][A-Z]*")),
      couverture: new FormControl('', Validators.required),
      prix: new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]*")]),
      genre_id: new FormControl('', Validators.required),
      
    });
    
  }

  ngOnInit(): void {
  
  }

  get id() { return this.jeux_group.get('id'); }
  get nom() { return this.jeux_group.get('nom'); }
  get description() { return this.jeux_group.get('description'); }
  get couverture() { return this.jeux_group.get('couverture'); }
  get prix() { return this.jeux_group.get('prix'); }
  get genre_id() { return this.jeux_group.get('genre_id'); }
  
  add_jeu(j:Jeux) {
    this.add.emit(j);
  }

  delete(id) {
    this.js.deleteJeu(id).subscribe(resultat => {
      alert("jeu supprimé");
      this.router.navigateByUrl('/jeux');
    }, (err) => {
      console.log(err);
  });
  }
 
  getAll() {
    this.js.getJeu().subscribe(
    (data:Jeux[])=>{this.listjeu = data});
  }
}
