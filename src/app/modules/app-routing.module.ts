import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';



const appRotues: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'news', component: NewsComponent},
  // {path: 'login', component: LoginComponent},
  // {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  // {path: '**', component: NotfoundComponent}
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
