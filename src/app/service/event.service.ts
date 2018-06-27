import {Inject, Injectable, LOCALE_ID} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NewEventDtoModel} from '../model/new-event-dto.model';
import { formatDate} from '@angular/common';

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient, @Inject(LOCALE_ID) private locale: string) {
  }

  sendNewEvents(createdEvents: NewEventDtoModel[]) {
    return this.httpClient.post('http://localhost:8091/events', JSON.stringify(createdEvents),
      {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8', 'accept': '*/*'})});
  }

  getEventsBeetwenDates(username: string, start: Date, end: Date) {
    return this.httpClient.get('http://localhost:8091/events/in-range/'
      + username + '/' + this.transformDate(start) + '/' + this.transformDate(end));
  }


  transformDate(date) {
    return formatDate(date, 'dd-MM-yyyy', this.locale);
  }
}
