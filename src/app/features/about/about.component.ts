import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {PersonalInfo} from '../../shared/models/models';
import {DataService} from '../../shared/services/data.service';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {VisibleClassDirective} from '../../shared/directives/visible-class.directive';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [NgIf, NgFor, AsyncPipe, VisibleClassDirective, RouterLinkActive, RouterLink],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass',
  standalone: true
})
export class AboutComponent {
  personalInfo$: Observable<PersonalInfo> | null = null;

  constructor(readonly dataService: DataService) {
    this.personalInfo$ = dataService.getPersonalInfo();
  }

}
