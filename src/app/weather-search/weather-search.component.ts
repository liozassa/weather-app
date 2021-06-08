import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.scss']
})
export class WeatherSearchComponent implements OnInit {
  weatherForm: FormGroup;
  submitted: boolean;
  cities = [
    { id: 1, name: 'Tel Aviv' },
    { id: 2, name: 'New York' },
    { id: 3, name: 'Moscow' }
  ];
  units = ['standard', 'metric'];

  get f() { return this.weatherForm.controls; }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.weatherForm = this.fb.group({
      city: ['', Validators.required],
      units: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;


    if (!this.units.includes(this.f.units.value)) {
      this.f.units.setErrors({'incorrect': true});
    };

    if (this.weatherForm.invalid) {
      console.log('this.f.units.value', this.f.units.value);
      return;
    }

    console.log(`city: ${this.f.city.value} unit: ${this.f.units.value}`);

    // Clear the form for further use.
    this.submitted = false;
    console.log(this.weatherForm.value);
    this.weatherForm.reset();
  }

}
