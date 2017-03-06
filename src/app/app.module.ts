// libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

// 3rd party libs
import { LocalStorageModule } from 'angular-2-local-storage';

// components
import { AppComponent } from './app.component';
import { LandingComponent } from './Components/LandingComponent/LandingComponent';
import { TodoDashboardComponent } from './Components/TodoDashboard/TodoDashboardComponent/TodoDashboardComponent';
import { AddTodoComponent } from './Components/TodoDashboard/AddTodoComponent/AddTodoComponent';
// services
import { AuthService } from './Services/AuthService';
import { HttpService } from './Services/HttpService';

// middleware
import { GuardMiddleware } from './Middleware/GuardMiddleware';

// routes
import { AppRoutes } from './Routes/AppRoutes';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    TodoDashboardComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
    LocalStorageModule.withConfig({ prefix: 'todo-it', storageType: 'localStorage' })
  ],
  providers: [
    GuardMiddleware,
    AuthService,
    HttpService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
