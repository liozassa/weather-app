import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherResolver } from '../store/weather.resolver';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { 
    path: '', component: HomeComponent, pathMatch: 'full',
    resolve: [WeatherResolver]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
