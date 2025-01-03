import { Component } from '@angular/core';
import { FontAwesomeModule, IconDefinition } from '@fortawesome/angular-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {NgFor, NgIf} from '@angular/common';

export interface NavItem {
  link: string,
  label: string
}

export interface SocialMediaItem {
  link: string,
  icon: IconDefinition
}

@Component({
  selector: 'app-navigation',
  imports: [FontAwesomeModule, NgFor, NgIf],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent {
  readonly faInstagram = faInstagram;
  readonly faFacebook = faFacebook;

  readonly availableSections: NavItem[]= [
    {link: '#sectionHome', label: 'domů'},
    {link: '#sectionServices', label: 'služby'},
    {link: '#sectionAbout', label: 'o mě'},
    {link: '#sectionGallery', label: 'galerie'},
    {link: '#sectionContact', label: 'kontakt'}
  ]

  readonly availableSocialMedia: SocialMediaItem[] = [
    {link: '#', icon: faInstagram},
    {link: '#', icon: faFacebook}
  ]
}
