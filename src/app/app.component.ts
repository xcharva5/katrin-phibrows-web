import { Component } from '@angular/core';
import {NavigationComponent} from './core/navigation/navigation.component';
import {HomeSectionComponent} from './features/home-section/home-section.component';
import {ServicesSectionComponent} from './features/services-section/services-section.component';

@Component({
  selector: 'app-root',
  imports: [NavigationComponent, HomeSectionComponent, ServicesSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

}
