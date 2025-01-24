import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { NgFor, NgIf } from '@angular/common';
import { LinkIconItem, LinkLabelItem } from '../../shared/models/models';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-navigation',
  imports: [FontAwesomeModule, NgFor, NgIf, RouterLink, RouterLinkActive],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent {
  readonly faInstagram = faInstagram;
  readonly faFacebook = faFacebook;

  readonly availableSections: LinkLabelItem[]= [
    {link: '', label: 'Domů'},
    {link: 'sluzby', label: 'Služby'},
    {link: 'o-me', label: 'O mě'},
    {link: '#', label: 'Reference'},
    {link: '#', label: 'Kontakt'}
  ]

  readonly availableSocialMedia: LinkIconItem[] = [
    {link: '#', icon: this.faInstagram},
    {link: '#', icon: this.faFacebook}
  ]
}
