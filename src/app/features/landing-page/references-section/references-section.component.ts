import { Component } from '@angular/core';
import {Image} from '../../../shared/models/models';
import {DataService} from '../../../shared/services/data.service';
import {Observable, of} from 'rxjs';
import {AsyncPipe, CommonModule, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-references-section',
  imports: [NgIf, AsyncPipe, NgFor, CommonModule],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.sass'
})
export class ReferencesSectionComponent {
  images$: Observable<Image[] | undefined> = of(undefined);

  constructor(
    readonly dataService: DataService,
  ) {
    this.images$ = dataService.getImages();
  }
}
