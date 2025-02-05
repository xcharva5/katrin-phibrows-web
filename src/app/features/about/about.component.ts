import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PersonalInfo } from '../../shared/models/models';
import { DataService } from '../../shared/services/data.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { VisibleClassDirective } from '../../shared/directives/visible-class.directive';
import { faAnglesRight, faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  imports: [NgIf, NgFor, AsyncPipe, VisibleClassDirective, FaIconComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.sass',
  standalone: true
})
export class AboutComponent {
  personalInfo$: Observable<PersonalInfo> | null = null;

  readonly faAnglesRight = faAnglesRight;
  readonly faAnglesLeft = faAnglesLeft;

  constructor(readonly dataService: DataService) {
    this.personalInfo$ = dataService.getPersonalInfo();
  }

}
