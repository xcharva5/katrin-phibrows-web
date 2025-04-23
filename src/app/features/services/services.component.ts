import {Component} from '@angular/core';
import {ServiceListComponent} from './service-list/service-list.component';
import {VisibleClassDirective} from '../../shared/directives/visible-class.directive';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent, VisibleClassDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass',
  standalone: true
})
export class ServicesComponent {

}
