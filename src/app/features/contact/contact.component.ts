import {Component} from '@angular/core';
import {VisibleClassDirective} from '../../shared/directives/visible-class.directive';
import {faFacebook, faInstagram} from '@fortawesome/free-brands-svg-icons';
import {faAt, faHouse, faPhone, faUser} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {NgIf} from '@angular/common';
import {LoaderComponent} from '../../core/loader/loader.component';

@Component({
  selector: 'app-contact',
  imports: [VisibleClassDirective, FaIconComponent, NgIf, LoaderComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.sass',
  standalone: true
})
export class ContactComponent {
  readonly faFacebook = faFacebook;
  readonly faPhone = faPhone;
  readonly faAt = faAt;
  readonly faUser = faUser;
  readonly faHouse = faHouse;
  readonly faInstagram = faInstagram;

  isMapLoading = true;
  showSocialSites = false;

  onIFrameLoaded(): void {
    this.isMapLoading = false;
  }
}
