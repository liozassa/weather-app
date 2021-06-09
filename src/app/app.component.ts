import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { AppState } from './reducers';
import { FetchCities } from './store/weather.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'What\'s the weather today?';
  version = environment.VERSION;
  credit = environment.CREDIT;
}
