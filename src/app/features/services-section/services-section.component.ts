import { Component } from '@angular/core';
import {NgFor} from '@angular/common';
import {ServiceHighlightComponent} from './service-highlight/service-highlight.component';

export interface Service {
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-services-section',
  imports: [NgFor, ServiceHighlightComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.sass'
})
export class ServicesSectionComponent {
  public services: Service[] = [
    {
      name: 'microblading',
      description: 'Microblading nebo také vláskování obočí je jednou z technik permanentního make-upu. Tato metoda zvýrazňuje přirozený vzhled obočí a zintenzivní jeho tvar.',
      image: 'microblading.jpg'
    }
  ]

}
