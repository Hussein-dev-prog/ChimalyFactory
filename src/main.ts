import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
// import {bootstrapApplication} from '@angular/platform-browser';
// import { SliderComponent } from './app/slider/carousel-pause';
// bootstrapApplication(SliderComponent)

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
