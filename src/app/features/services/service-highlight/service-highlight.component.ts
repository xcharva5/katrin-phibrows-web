import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { Service } from '../../../shared/models/models';

@Component({
  selector: 'app-service-highlight',
  imports: [NgIf],
  templateUrl: './service-highlight.component.html',
  styleUrl: './service-highlight.component.sass',
  standalone: true
})
export class ServiceHighlightComponent {
  @Input() service: Service | null = null;

  constructor(private readonly router: Router) {
  }

  goToServiceDetail(serviceName: string): void {
    this.router.navigate(['/sluzby', serviceName])
  }

}
