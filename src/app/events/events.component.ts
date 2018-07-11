import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {EventModel} from '../model/event.model';
import {FormArray, FormGroup} from '@angular/forms';
import {NewEventDtoModel} from '../model/new-event-dto.model';
import {SessionService} from '../service/session.service';
import {HttpClient} from '@angular/common/http';
import {EventService} from '../service/event.service';
import {Router} from '@angular/router';
import {AlertService} from '../service/alert.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  newEventsForm: FormGroup;
  today: Date;
  events: EventModel[] = [];
  newEvents: EventModel[] = [];
  eventTypes: string[] = ['NO_EVENT', 'VACATION', 'SICK_LEAVE', 'HOME_OFFICE', 'OTHER'];
  pipe = new DatePipe('en-US');

  constructor(private sessionService: SessionService,
              private httpClient: HttpClient,
              private eventService: EventService,
              private router: Router,
              private alertService: AlertService) {
  }

  onSubmit() {
    const createdEvents = [];
    console.log(this.events);
    console.log(this.newEvents);
    for (const event of this.newEvents) {
      if ( this.events.find(x => x.id === event.id).type !== event.type) {
        createdEvents.push(new NewEventDtoModel(this.sessionService.getUsername(), event.type,
          this.pipe.transform(event.when, 'dd-MM-yyyy')));
      }
    }
    console.log(createdEvents);
    this.eventService.sendNewEvents(createdEvents).subscribe(response => {
      this.alertService.success(createdEvents.length + ' Events has been added');
      this.router.navigate(['/home']);
    });
  }

  ngOnInit() {
    this.initWeekDays();

    this.newEventsForm = new FormGroup({
      events: new FormArray([])
    });


  }

  onChange(event) {
    for (let i = 0; i < this.newEvents.length; i++) {
      if (this.newEvents[i].id === event.id) {
        this.newEvents[i].type = event.type;
      }
    }
  }

  private initWeekDays() {
    this.today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(this.today.getDate() + 30);
    this.eventService.getEventsBeetwenDates(this.sessionService.getUsername(),
      this.today, tomorrow)
      .subscribe(events => {
          this.events = <EventModel[]>events;
          this.newEvents = JSON.parse(JSON.stringify(this.events));
        }
      );
  }
}
