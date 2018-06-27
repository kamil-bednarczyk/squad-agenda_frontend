export class EventModel {
  id: string;
  type: string;
  when: Date;

  constructor(id: string, type: string, when: Date) {
    this.id = id;
    this.type = type;
    this.when = when;
  }
}
