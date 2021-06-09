import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from '../../shared/models/city.model';
import { WeatherService } from '../../shared/services/weather.service';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  weatherForm: FormGroup;
  submitted: boolean;
  units = ['standard', 'metric', 'imperial'];
  cities: City[];
  countries: string[];
  states: string[];
  selected_country: string;
  selected_state: string;
  state_disabled: true;

  @Output() selectedData: EventEmitter<any> = new EventEmitter();

  get f() { return this.weatherForm.controls; }

  constructor(private fb: FormBuilder,
              private weatherService: WeatherService) {
                this.cities = [];
                this.countries = [];
                //this.selected_country = 'IL';
               }

  ngOnInit(): void {
    this.weatherService.getCities()
    .subscribe((_cities: City[]) => {
      this.cities = _cities;
      _cities.map(c => {
        if (this.countries.findIndex(co => co === c.country) === -1) {
          this.countries.push(c.country);
          this.countries.sort((a,b) => a < b ? -1 : 1);
        }
      });
    });

    
    this.weatherForm = this.fb.group({
      country: ['', Validators.required],
      state: [''],
      city: ['', Validators.required],
      units: ['', Validators.required]
    });
    this.weatherForm.reset();
    this.weatherForm.controls.state.disable();
  }

  onSubmit() {
    this.submitted = true;

    if (this.weatherForm.invalid) {
      console.log('this.f.units.value', this.f.units.value);
      return;
    }

    // Clear the form for further use.
    this.submitted = false;
    const city_data = {
      city_id: this.f.city.value,
      units: this.f.units.value
    };
    this.selectedData.emit(city_data);
    this.weatherForm.reset();
    this.weatherForm.controls.state.disable();
  }

  onCountrySelected(e) {
    this.selected_country = e.target.value.split(' ')[1];
  }

  onStateSelected(e) {
    this.selected_state = e.target.value.split(' ')[1];
  }

  getStateByCountry() {
    this.states = [];
    if (this.selected_country === 'US') {
      this.weatherForm.controls.state.enable();
      this.cities.filter(c => c.country === this.selected_country)
      .map((city: City) => {
        if (this.states.findIndex(s => s === city.state) === -1) {
          this.states.push(city.state);
        }
      });
    } else {
      this.weatherForm.controls.state.disable();
    };
    return this.states;
  }

  getCitiesByCountry() {
    if (!this.selected_country) {
      return [];
    } else if (this.selected_country === 'US') {
      return this.cities.filter(c => c.country === this.selected_country && c.state === this.selected_state)
      .sort((a,b) => a.name < b.name ? -1 : 1);
    }
    return this.cities.filter(c => c.country === this.selected_country)
    .sort((a,b) => a.name < b.name ? -1 : 1);
  }

}
