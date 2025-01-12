import { Component } from '@angular/core';
import {ServiceListComponent} from '../../services/service-list/service-list.component';
import {VisibleClassDirective} from '../../../shared/directives/visible-class.directive';

@Component({
  selector: 'app-services-section',
  imports: [ServiceListComponent, VisibleClassDirective],
  templateUrl: './services-section.component.html',
  styleUrl: './services-section.component.sass',
  standalone: true
})
export class ServicesSectionComponent {

}
