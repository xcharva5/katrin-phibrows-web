import {Routes} from '@angular/router';
import {LandingPageComponent} from './features/landing-page/landing-page.component';
import {ServiceDetailComponent} from './features/services/service-detail/service-detail.component';
import {ServicesComponent} from './features/services/services.component';
import {ServicePriceListComponent} from './features/services/service-price-list/service-price-list.component';

export const routes: Routes = [
  {path: '', component: LandingPageComponent},
  {path: 'sluzby', component: ServicesComponent},
  {path: 'sluzby/cenik', component: ServicePriceListComponent},
  {path: 'sluzby/:serviceName', component: ServiceDetailComponent}
];
