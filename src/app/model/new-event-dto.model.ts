
export class NewEventDtoModel {

  username: string;
  type: string;
  date: string;

  constructor(username: string, type: string, date: string) {
    this.username = username;
    this.type = type;
    this.date = date;
  }
}
