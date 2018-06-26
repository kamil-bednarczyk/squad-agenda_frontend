import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NewEventDtoModel} from '../model/new-event-dto.model';

@Injectable()
export class EventService {

  constructor(private httpClient: HttpClient) {
  }

  sendNewEvents(createdEvents: NewEventDtoModel[]) {
    return this.httpClient.post('http://localhost:8091/events', JSON.stringify(createdEvents),
      {headers: new HttpHeaders({'Content-Type': 'application/json;charset=utf-8', 'accept': '*/*'})});
  }

}
