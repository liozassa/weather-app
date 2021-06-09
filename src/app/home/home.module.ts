import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { WeatherSearchComponent } from './weather-search/weather-search.component';
import { WeatherCardComponent } from './weather-card/weather-card.component';

@NgModule({
  declarations: [
    HomeComponent,
    WeatherSearchComponent,
    WeatherCardComponent
  ],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
