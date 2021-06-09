import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/*export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}*/

@NgModule({
    imports: [
      CommonModule
    ],
    exports: [
      CommonModule
    ]
})
export class SharedModule { }