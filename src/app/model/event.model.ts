export class EventModel {
  id: string;
  type: string;
  date: string;


  constructor(id: string, type: string, date: string) {
    this.id = id;
    this.type = type;
    this.date = date;
  }
}
