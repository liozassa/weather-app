import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { WeatherSearchComponent } from './weather-search/weather-search.component';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherSearchComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
