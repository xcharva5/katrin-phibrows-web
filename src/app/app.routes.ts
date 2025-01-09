import { Routes } from '@angular/router';
import {HomeSectionComponent} from './features/landing-page/home-section/home-section.component';
import {ServiceHighlightComponent} from './features/services/service-highlight/service-highlight.component';
import {ServicesSectionComponent} from './features/landing-page/services-section/services-section.component';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {ServiceDetailComponent} from './features/services/service-detail/service-detail.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'service/:serviceName', component: ServiceDetailComponent}
];
