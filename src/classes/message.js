import faker from '@faker-js/faker';

export default class Message {
  constructor(data) {
    this.id = faker.datatype.uuid();
    this.title = data.title;
    this.date = data.date;
    this.content = data.content;
    this.recipient = data.recipient;
    this.media = data.media;
  }
}
