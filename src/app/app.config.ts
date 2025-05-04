import {ApplicationConfig, LOCALE_ID, provideZoneChangeDetection} from '@angular/core';
import {provideRouter, withInMemoryScrolling} from '@angular/router';
import { routes } from './app.routes';
import {provideHttpClient} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeCs from '@angular/common/locales/cs';

registerLocaleData(localeCs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withInMemoryScrolling({scrollPositionRestoration: 'top'})),
    provideHttpClient(),
    { provide: LOCALE_ID, useValue: 'cs' }
  ]
};
