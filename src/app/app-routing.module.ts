import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'subscribe', component:SubscribeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
