import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';
import {Image, PersonalInfo, Service, PriceListItem} from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  /** SERVICES **/
  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('/assets/data/services.json');
  }

  getServiceByName(name: string): Observable<Service | undefined> {
    return this.http.get<Service[]>('assets/data/services.json')
      .pipe(map(services => services.find(service => service.name.toLowerCase() === name.toLowerCase())));
  }

  getPriceList(): Observable<PriceListItem[]> {
    return this.http.get<PriceListItem[]>('/assets/data/price-list.json');
  }

  /** IMAGES **/
  getImages(): Observable<Image[]> {
    return this.http.get<Image[]>('/assets/data/images.json');
  }

  /** ABOUT **/
  getPersonalInfo(): Observable<PersonalInfo> {
    return this.http.get<PersonalInfo>('/assets/data/about.json');
  }
}
