import {Injectable} from '@angular/core';
import {AlertType} from '../model/alert-type.model';
import {AlertModel} from '../model/alert.model';
import {Observable, Subject} from 'rxjs';

@Injectable()
export class AlertService {

  private subject = new Subject<AlertModel>();

  constructor() {

  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  success(message: string) {
    this.alert(AlertType.Success, message);
  }

  error(message: string) {
    this.alert(AlertType.Error, message);
  }

  info(message: string) {
    this.alert(AlertType.Info, message);
  }

  warn(message: string) {
    this.alert(AlertType.Warning, message);
  }

  alert(type: AlertType, message: string) {
    this.subject.next(<AlertModel>{type: type, message: message});
  }

  clear() {
    this.subject.next();
  }
}
