import faker from '@faker-js/faker';

export default class HelpTicket {
  constructor({ name, date, status, topic }) {
    this.id = faker.datatype.uuid();
    this.name = name;
    this.date = date;
    this.status = status;
    this.topic = topic;
  }
}
