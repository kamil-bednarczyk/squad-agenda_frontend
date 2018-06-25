import {Component, OnInit} from '@angular/core';
import {DatePipe} from '@angular/common';
import {EventModel} from '../model/event.model';
import {FormArray, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {

  newEventsForm: FormGroup;
  createdEvents: EventModel[];
  today: Date;
  events: EventModel[] = [];
  eventTypes: string[] = ['VACATION', 'SICK_LEAVE', 'WORK_FROM_HOME'];
  pipe = new DatePipe('en-US');

  constructor() {
  }

  onSubmit() {
    this.createdEvents = [];
    for (const event of this.events) {
      if (event.type !== null) {
        this.createdEvents.push(event);
      }
    }
    console.log(this.createdEvents);
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
      const dateAsString = this.pipe.transform(tomorrow, 'EEEE, MM LLLL');
      this.events.push(new EventModel(i + '', null, dateAsString));
    }
  }
}
