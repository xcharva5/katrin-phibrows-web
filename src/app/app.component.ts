import { Component } from '@angular/core';
import {NavigationComponent} from './core/navigation/navigation.component';
import {HomeSectionComponent} from './features/home-section/home-section.component';
import {ServicesSectionComponent} from './features/services-section/services-section.component';
import {AboutSectionComponent} from './features/about-section/about-section.component';
import {GallerySectionComponent} from './features/gallery-section/gallery-section.component';
import {ContactSectionComponent} from './features/contact-section/contact-section.component';

@Component({
  selector: 'app-root',
  imports: [
    NavigationComponent,
    HomeSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    ContactSectionComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

}
