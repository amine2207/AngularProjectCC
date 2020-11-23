import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../shared/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login_group: FormGroup;
  constructor(private auth: LoginService, private router: Router)
  {
    this.login_group = new FormGroup({
      username: new FormControl(['',Validators.required]) ,
      motdepasse: new FormControl(['',Validators.required]) 
  });
  }

  ngOnInit(): void {
  }

  get username() { return this.login_group.get('username'); }
  get motdepasse() { return this.login_group.get('motdepasse'); }

  login() {
    const val = this.login_group.value;

    if (val.username && val.password) {
        this.auth.login(val.email, val.password)
            .subscribe(
                () => {
                    console.log("User is logged in");
                    //this.router.navigateByUrl('/');
                }
            );
    }
}


}
