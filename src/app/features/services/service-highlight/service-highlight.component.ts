import {Component, Input} from '@angular/core';
import {Service} from '../../landing-page/services-section/services-section.component';
import {NgIf} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-service-highlight',
  imports: [NgIf],
  templateUrl: './service-highlight.component.html',
  styleUrl: './service-highlight.component.sass'
})
export class ServiceHighlightComponent {
  @Input() service!: Service;

  constructor(private readonly router: Router) {
  }

  goToServiceDetail(serviceName: string): void {
    console.log('===goToServiceDetail');
    this.router.navigate(['/service', serviceName])
  }

}
