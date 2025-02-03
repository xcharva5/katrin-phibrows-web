import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { LinkIconItem, LinkLabelItem } from '../../shared/models/models';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [FontAwesomeModule, NgFor, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass',
  standalone: true
})
export class NavigationComponent {
  readonly faInstagram = faInstagram;
  readonly faFacebook = faFacebook;

  readonly availableSections: LinkLabelItem[]= [
    {link: '', label: 'Domů', exactMatching: true},
    {link: 'sluzby', label: 'Služby', exactMatching: false},
    {link: 'o-me', label: 'O mě', exactMatching: false},
    {link: 'kontakt', label: 'Kontakt', exactMatching: false}
  ]

  readonly availableSocialMedia: LinkIconItem[] = [
    {link: '#', icon: this.faInstagram},
    {link: '#', icon: this.faFacebook}
  ]
}
