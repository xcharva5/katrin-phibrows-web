import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {faQuoteLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-references-section',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './references-section.component.html',
  styleUrl: './references-section.component.sass',
  standalone: true
})
export class ReferencesSectionComponent {
  readonly faQuoteLeft = faQuoteLeft;

  constructor() { }
}
