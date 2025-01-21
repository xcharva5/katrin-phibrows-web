import { Component } from '@angular/core';
import {AsyncPipe, CommonModule, NgFor, NgIf} from '@angular/common';

@Component({
  selector: 'app-references-section',
  imports: [NgIf, AsyncPipe, NgFor, CommonModule],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.sass'
})
export class ReferencesSectionComponent {

  constructor() { }
}
