import faker from '@faker-js/faker';

export default class Stat {
  constructor({ title, value, icon }) {
    this.id = faker.datatype.uuid();
    this.title = title;
    this.value = value;
    this.icon = icon;
  }
}
