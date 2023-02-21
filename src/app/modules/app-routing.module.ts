import { NgModule } from '@angular/core';

import { AuthGuard } from '../services/AuthGuard.service';
import { HomeComponent } from '../components/home/home.component';
import { NewsComponent } from '../components/news/news.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { LoginComponent } from '../components/login/login.component';
import { NotfoundComponent } from '../components/notfound/notfound.component';

import { Routes, RouterModule } from '@angular/router';



const appRotues: Routes = [
  {path: '', component: HomeComponent},
  {path: 'news', component: NewsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: '**', component: NotfoundComponent}
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot(appRotues),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
