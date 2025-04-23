import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-loader',
  imports: [],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.sass'
})
export class LoaderComponent {
  @Input() isFullPageLoader = false;

}
