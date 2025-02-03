import { Component } from '@angular/core';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { ServiceHighlightComponent } from '../service-highlight/service-highlight.component';
import { Service } from '../../../shared/models/models';
import { DataService } from '../../../shared/services/data.service';
import { Observable } from 'rxjs';
import { VisibleClassDirective } from '../../../shared/directives/visible-class.directive';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-service-list',
  imports: [NgFor, AsyncPipe, NgIf, ServiceHighlightComponent, VisibleClassDirective, RouterLink],
  templateUrl: './service-list.component.html',
  styleUrl: './service-list.component.sass',
  standalone: true
})
export class ServiceListComponent {
  services$: Observable<Service[]> | null = null;

  constructor(dataService: DataService) {
    this.services$ = dataService.getServices();
  }
}
