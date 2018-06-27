import {EventModel} from './event.model';

export class MemberModel {

   id: string;
   name: string;
   events: EventModel[] = []

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}
