export class EventModel {
  id: string;
  type: string;
  date: Date;

  constructor(id: string, type: string, date: Date) {
    this.id = id;
    this.type = type;
    this.date = date;
  }
}
