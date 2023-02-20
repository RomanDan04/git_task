import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialModule } from './modules/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { AppRoutingModule } from './modules/app-routing.module';
import { AuthGuard } from './services/AuthGuard.service';
import { Auth } from './services/Auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [AuthGuard, Auth],
  bootstrap: [AppComponent]
})
export class AppModule { }
