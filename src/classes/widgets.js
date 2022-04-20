export default class Widget {
  constructor(title = '', value = 0, color = '', withDollar = false) {
    this.title = title;
    this.value = value;
    this.color = color || '';
    this.withDollar = withDollar || false;
  }
}
