import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './Components/LoginComponent/LoginComponent';
import { RegisterComponent } from './Components/RegisterComponent/RegisterComponent';
import { DashboardComponent } from './Components/DashboardComponent/DashboardComponent';
import { LandingComponent } from './Components/LandingComponent/LandingComponent';

import { AppRoutes } from './Routes/AppRoutes';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
