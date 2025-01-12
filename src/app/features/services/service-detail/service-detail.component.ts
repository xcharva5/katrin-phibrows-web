import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {ActivatedRoute} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {Service} from '../../../shared/models/models';

@Component({
  selector: 'app-service-detail',
  imports: [AsyncPipe, NgIf, NgForOf, CommonModule],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.sass',
  standalone: true
})
export class ServiceDetailComponent implements OnInit {
  serviceName = '';
  service$: Observable<Service | undefined> = of(undefined);

  constructor(
    private readonly dataService: DataService,
    private readonly activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.serviceName = this.activatedRoute.snapshot.paramMap.get('serviceName') ?? '';
    this.service$ = this.dataService.getServiceByName(this.serviceName);
  }
}
