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
  selected_country: string;

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
        }
      });
    });

    
    this.weatherForm = this.fb.group({
      country: ['', Validators.required],
      city: ['', Validators.required],
      units: ['', Validators.required]
    });
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
  }

  onCountrySelected(e) {
    this.selected_country = e.target.value;
  }

  getCitiesByCountry() {
    if (!this.selected_country) {
      return [];
    }
    return this.cities.filter(c => c.country === this.selected_country.split(' ')[1]);
  }

}
