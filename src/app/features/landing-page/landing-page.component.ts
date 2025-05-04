import {Component, OnInit} from '@angular/core';
import { HomeSectionComponent } from './home-section/home-section.component';
import { ServicesSectionComponent } from './services-section/services-section.component';
import { AboutSectionComponent } from './about-section/about-section.component';
import { ReferencesSectionComponent } from './references-section/references-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-landing-page',
  imports: [
    HomeSectionComponent,
    ServicesSectionComponent,
    AboutSectionComponent,
    ReferencesSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.sass',
  standalone: true
})
export class LandingPageComponent implements OnInit {
  constructor(private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Katrin Phibrows');
  }
}
