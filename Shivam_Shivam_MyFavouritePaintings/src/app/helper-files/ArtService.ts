import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from './helper-files/contentDb';

@Injectable({
  providedIn: 'root'
})
export class Web601Service {
  constructor() {}

  getContentArray(): Observable<any[]> {
   
    return of(contentArray);
  }

  getContentItemById(id: number): Observable<any> {

    const item = contentArray.find(content => content.id === id);
    return of(item);
  }
}
