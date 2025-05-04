import {Component, OnInit} from '@angular/core';
import {ServiceListComponent} from './service-list/service-list.component';
import {VisibleClassDirective} from '../../shared/directives/visible-class.directive';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  imports: [ServiceListComponent, VisibleClassDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.sass',
  standalone: true
})
export class ServicesComponent implements OnInit {
  constructor(private readonly titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('Katrin Phibrows: Služby');
  }
}
