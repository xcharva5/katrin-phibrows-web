import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../shared/services/data.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Observable, of} from 'rxjs';
import {AsyncPipe, CommonModule, NgForOf, NgIf} from '@angular/common';
import {Service} from '../../../shared/models/models';
import {faAnglesRight, faTriangleExclamation} from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-service-detail',
  imports: [AsyncPipe, NgIf, NgForOf, CommonModule, FaIconComponent, RouterLink],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.sass',
  standalone: true
})
export class ServiceDetailComponent implements OnInit {
  serviceName = '';
  service$: Observable<Service | undefined> = of(undefined);

  readonly faAnglesRight = faAnglesRight;
  readonly faTriangleExclamation = faTriangleExclamation;

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
