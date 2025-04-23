import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NavigationComponent} from './core/navigation/navigation.component';
import {LoaderComponent} from './core/loader/loader.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, LoaderComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  showLoader = true;

  ngOnInit() {
    setTimeout(() => this.showLoader = false, 1500);
  }
}
