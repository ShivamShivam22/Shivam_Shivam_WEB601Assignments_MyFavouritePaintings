import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  private messageSubject = new BehaviorSubject<string>('');

  constructor() {}

  sendMessage(message: string): void {
    this.messageSubject.next(message);
  }

  getMessage(): Observable<string> {
    return this.messageSubject.asObservable();
  }
}
