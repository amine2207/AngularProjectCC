import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Jeux } from '../model/jeux';
import { JeuxService } from '../shared/jeux.service';

@Component({
  selector: 'app-add-jeu',
  templateUrl: './add-jeu.component.html',
  styleUrls: ['./add-jeu.component.css']
})
export class AddJeuComponent implements OnInit {
  jeux_form: FormBuilder = new FormBuilder();
  jeux_group: FormGroup;
  jeux: Jeux = new Jeux();
  constructor(private js: JeuxService, private router: Router) { this.jeux_group = this.jeux_form.group({
    id: new FormControl('', Validators.required),
    nom: new FormControl('', [Validators.required, Validators.pattern("[a-z][A-Z]*")]),
    description: new FormControl('', Validators.pattern("[a-z][A-Z]*")),
    couverture: new FormControl('', Validators.required),
    prix: new FormControl('', [Validators.required, Validators.pattern("[1-9][0-9]*")]),
    genre_id: new FormControl('', Validators.required),
    
  }); }

  ngOnInit(): void {
  }
  get id() { return this.jeux_group.get('id'); }
  get nom() { return this.jeux_group.get('nom'); }
  get description() { return this.jeux_group.get('description'); }
  get couverture() { return this.jeux_group.get('couverture'); }
  get prix() { return this.jeux_group.get('prix'); }
  get genre_id() { return this.jeux_group.get('genre_id'); }

  add_jeu() {
    this.js.addJeu(this.jeux).subscribe(resultat => {
      alert("Jeu ajouté !!")
      console.log("jeu added");
    },
      (err) => {
        console.log(err);
      });
  }

}
