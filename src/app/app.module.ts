import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';

 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavOneComponent } from './components/nav-one/nav-one.component';
import { NavTwoComponent } from './components/nav-two/nav-two.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HealthyComponent } from './components/healthy/healthy.component';
import { PolicyComponent } from './components/policy/policy.component';
import { EconomieComponent } from './components/economie/economie.component';
import { AccidentsComponent } from './components/accidents/accidents.component';
import { SportsComponent } from './components/sports/sports.component';
import { AuthComponent } from './components/auth/auth.component';
import { MyNewsComponent } from './components/my-news/my-news.component';
import { UserNewsComponent } from './components/user-news/user-news.component';
import { FooterComponent } from './components/footer/footer.component';
 
@NgModule({
  declarations: [
    AppComponent,
    NavOneComponent,
    NavTwoComponent,
    HomeMainComponent,
    HealthyComponent,
    PolicyComponent,
    EconomieComponent,
    AccidentsComponent,
    SportsComponent,
    AuthComponent,
    MyNewsComponent,
    UserNewsComponent,
    FooterComponent,
     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
   
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
