import { Component } from '@angular/core';
import {HomeSectionComponent} from '../home-section/home-section.component';
import {ServicesSectionComponent} from '../services-section/services-section.component';
import {AboutSectionComponent} from '../about-section/about-section.component';
import {GallerySectionComponent} from '../gallery-section/gallery-section.component';
import {ContactSectionComponent} from '../contact-section/contact-section.component';

@Component({
  selector: 'app-landing-page',
  imports: [
    HomeSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    GallerySectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.sass'
})
export class LandingPageComponent {

}
