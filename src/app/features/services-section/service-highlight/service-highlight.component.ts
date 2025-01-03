import {Component, Input} from '@angular/core';
import {Service} from '../services-section.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-service-highlight',
  imports: [NgIf],
  templateUrl: './service-highlight.component.html',
  styleUrl: './service-highlight.component.sass'
})
export class ServiceHighlightComponent {
  @Input() service!: Service;

}
