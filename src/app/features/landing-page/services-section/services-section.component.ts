import { Component } from '@angular/core';
import {ServiceListComponent} from '../../services/service-list/service-list.component';

@Component({
  selector: 'app-services-section',
  imports: [ServiceListComponent],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.sass'
})
export class ServicesSectionComponent {
  constructor() {
    document.addEventListener("DOMContentLoaded", () => {
      const header = document.querySelector(".section-services-header");

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after animation is triggered
          }
        });
      }, { threshold: 0.1, rootMargin: '0px -100px 0px 0px' });

      if (header) {
        observer.observe(header);
      }
    });

  }

}
