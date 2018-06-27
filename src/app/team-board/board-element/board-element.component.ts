import {Component, Input, OnInit} from '@angular/core';
import {MemberModel} from '../../model/member.model';
import {EventService} from '../../service/event.service';
import {EventModel} from '../../model/event.model';

@Component({
  selector: 'app-board-element',
  templateUrl: './board-element.component.html',
  styleUrls: ['./board-element.component.css']
})
export class BoardElementComponent implements OnInit {

  @Input() member: MemberModel;
  @Input() height;
  @Input() width;
  placeholderImagePath: string;
  events: EventModel[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.placeholderImagePath = '/assets/placeholder.png';
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 7);

    this.eventService.getEventsBeetwenDates(this.member.name, today, tomorrow).subscribe(events => {
      this.events = <EventModel[]> events;
      console.log(this.events);
    });
  }
}
