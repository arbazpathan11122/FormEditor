import { Injectable } from '@angular/core';
import {  Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  private subject = new Subject<any>();

  sendMessage(message: object) {
      this.subject.next({ form: message });
  }

  clearMessages() {
      this.subject.next();
  }

  getMessage(): Observable<any> {
      return this.subject.asObservable();
  }



  constructor() { }
}
