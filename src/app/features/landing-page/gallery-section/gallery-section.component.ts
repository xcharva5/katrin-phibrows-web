import { Component } from '@angular/core';
import {Image} from '../../../shared/models/models';
import {DataService} from '../../../shared/services/data.service';
import {Observable, of} from 'rxjs';
import {AsyncPipe, CommonModule, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-gallery-section',
  imports: [NgIf, AsyncPipe, NgFor, CommonModule],
  templateUrl: './gallery-section.component.html',
  styleUrl: './gallery-section.component.sass'
})
export class GallerySectionComponent {
  images$: Observable<Image[] | undefined> = of(undefined);

  constructor(
    readonly dataService: DataService,
  ) {
    this.images$ = dataService.getImages();
  }
}
