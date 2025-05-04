import {Component} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {Observable} from 'rxjs';
import {PriceListItem} from '../../../shared/models/models';
import {AsyncPipe, NgForOf, NgIf} from '@angular/common';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-service-price-list',
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf
  ],
  templateUrl: './service-price-list.component.html',
  styleUrl: './service-price-list.component.sass',
  standalone: true
})
export class ServicePriceListComponent {
  priceList$: Observable<PriceListItem[]> | null = null;

  constructor(
    dataService: DataService,
    private readonly titleService: Title
  ) {
    this.priceList$ = dataService.getPriceList();
    this.titleService.setTitle('Katrin Phibrows: Ceník služeb');
  }

}
