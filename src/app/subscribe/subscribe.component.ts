import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { reader } from '../model/reader';
import { SubscribeService } from '../shared/subscribe.service';
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  subscribe_group: FormGroup;
  reader: reader = new reader();
  
  constructor(private subsc : SubscribeService , private router: Router) {
  }

  ngOnInit(): void {
    
    this.subscribe_group = new FormGroup(
      {
        email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]),
        username: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("[a-z][0-9]+")]),
        motdepasse: new FormControl('', [Validators.required, Validators.minLength(4), Validators.pattern("[A-Za-z0-9._%+-]{10}")]),
      }
    );
  }
  get username() { return this.subscribe_group.get('username'); }
  get email() { return this.subscribe_group.get('email'); }
  get motdepasse() { return this.subscribe_group.get('motdepasse'); }
  get confirmPassword() { return this.subscribe_group.get('confirmPassword'); }

  save() {
    this.subsc.Subscribe_Reader(this.reader).subscribe(
      resultat => {
        console.log("User added");
        alert("Un nouveau Utilisateur est ajouté");
        this.router.navigateByUrl('/login');
      }, (err) => {
        console.log(err);
      }
    )
  }
}
