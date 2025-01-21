import { Routes } from '@angular/router';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {ServiceDetailComponent} from './features/services/service-detail/service-detail.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sluzby/:serviceName', component: ServiceDetailComponent}
];
