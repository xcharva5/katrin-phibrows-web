import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './core/navigation/navigation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {

}
