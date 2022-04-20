export default class Withdrawals {
  constructor({ amount = 0, date = new Date(), status = 'completed', ...rest }) {
    this.amount = amount;
    this.date = date;
    this.status = status;
  }
}
