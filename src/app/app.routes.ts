import {Routes} from '@angular/router';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {ServiceDetailComponent} from './features/services/service-detail/service-detail.component';
import {ServicesComponent} from './features/services/services.component';
import {ServicePriceListComponent} from './features/services/service-price-list/service-price-list.component';
import {AboutComponent} from './features/about/about.component';
import {ContactComponent} from './features/contact/contact.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sluzby', component: ServicesComponent},
  {path: 'sluzby/cenik', component: ServicePriceListComponent},
  {path: 'sluzby/:serviceName', component: ServiceDetailComponent},
  {path: 'o-mne', component: AboutComponent},
  {path: 'kontakt', component: ContactComponent},
  {path: '**', redirectTo: ''},
];
