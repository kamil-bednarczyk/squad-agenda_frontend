import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {EventModel} from '../model/event.model';
import {FormArray, FormGroup} from '@angular/forms';
import {NewEventDtoModel} from '../model/new-event-dto.model';
import {SessionService} from '../service/session.service';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../service/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  newEventsForm: FormGroup;
  today: Date;
  events: EventModel[] = [];
  eventTypes: string[] = ['NO_EVENT', 'VACATION', 'SICK_LEAVE', 'HOME_OFFICE', 'OTHER'];
  pipe = new DatePipe('en-US');

  constructor(private sessionService: SessionService,
              private httpClient: HttpClient,
              private eventService: EventService) {
  }

  onSubmit() {
    const createdEvents = [];
    for (const event of this.events) {
      if (event.type !== null) {
        createdEvents.push(new NewEventDtoModel(this.sessionService.getUsername(), event.type,
          this.pipe.transform(event.date, 'dd-MM-yyyy')));
      }
    }
    this.eventService.sendNewEvents(createdEvents).subscribe(response => console.log(response));
  }

  ngOnInit() {
    this.initWeekDays();
    this.newEventsForm = new FormGroup({
      events: new FormArray([])
    });
  }

  onChange(event) {
    for (let i = 0; i < this.events.length; i++) {
      if (this.events[i].id === event.id) {
        this.events[i].type = event.type;
      }
    }
  }

  private initWeekDays() {
    this.today = new Date();
    for (let i = 0; i <= 7; i++) {
      const tomorrow = new Date();
      tomorrow.setDate(this.today.getDate() + i);
      this.events.push(new EventModel(i + '', null, tomorrow));
    }
  }
}
