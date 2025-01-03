import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable} from 'rxjs';

export interface Image {
  src: string,
  alt: string,
  description: string
}

export interface Service {
  name: string,
  shortDescription: string,
  longDescription: string,
  images: Image[]
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<Service[]> {
    return this.http.get<Service[]>('/assets/data/services.json');
  }

  getServiceByName(name: string): Observable<Service | undefined> {
    return this.http.get<Service[]>('assets/data/services.json')
      .pipe(map(services => services.find(service => service.name.toLowerCase() === name.toLowerCase())));
  }
}
