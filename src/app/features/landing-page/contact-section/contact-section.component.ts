import { Component } from '@angular/core';
import {faUser, faHouse, faPhone, faAt} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-contact-section',
  imports: [FontAwesomeModule],
  templateUrl: './contact-section.component.html',
  styleUrl: './contact-section.component.sass'
})
export class ContactSectionComponent {
  readonly faUser = faUser;
  readonly faHouse = faHouse;
  readonly faPhone = faPhone;
  readonly faAt = faAt;
  readonly faInstagram = faInstagram;
  readonly faFacebook = faFacebook;

}
