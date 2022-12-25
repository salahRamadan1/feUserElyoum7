import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccidentsComponent } from './components/accidents/accidents.component';
import { AuthComponent } from './components/auth/auth.component';
import { EconomieComponent } from './components/economie/economie.component';
import { HealthyComponent } from './components/healthy/healthy.component';
import { HomeMainComponent } from './components/home-main/home-main.component';
import { MyNewsComponent } from './components/my-news/my-news.component';
import { PolicyComponent } from './components/policy/policy.component';
import { SportsComponent } from './components/sports/sports.component';
import { UserNewsComponent } from './components/user-news/user-news.component';

const routes: Routes = [
  {path:'' , component:HomeMainComponent},
  {path:'main' , component:HomeMainComponent},
  {path:'healthy' , component:HealthyComponent},
  {path:'Policy' , component:PolicyComponent},
  {path:'economie' , component:EconomieComponent},
  {path:'accidents' , component:AccidentsComponent},
  {path:'sports' , component:SportsComponent},
  {path:'auth' , component:AuthComponent},
  {path:'myNews' , component:MyNewsComponent},
  {path:'userNews' , component:UserNewsComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
