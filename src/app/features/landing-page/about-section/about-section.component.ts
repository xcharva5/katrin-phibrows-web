import { Component } from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {PersonalInfo} from '../../../shared/models/models';
import {Observable} from 'rxjs';
import {AsyncPipe, NgFor, NgIf} from '@angular/common';
import {VisibleClassDirective} from '../../../shared/directives/visible-class.directive';
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-about-section',
  imports: [NgIf, NgFor, AsyncPipe, VisibleClassDirective, RouterLinkActive, RouterLink],
  templateUrl: './about-section.component.html',
  styleUrl: './about-section.component.sass',
  standalone: true
})
export class AboutSectionComponent {
  personalInfo$: Observable<PersonalInfo> | null = null;

  constructor(readonly dataService: DataService) {
    this.personalInfo$ = dataService.getPersonalInfo();
  }

}
