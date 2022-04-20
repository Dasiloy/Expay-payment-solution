export default class Transaction {
  constructor({ vendor = {}, receiver, amount, percent, status, date, location, method, id = 1 }) {
    this.id = `qrtransactionrandom001${id}`;
    this.vendor = vendor;
    this.receiver = receiver;
    this.amount = amount;
    this.commission = (amount * percent) / 100;
    this.percent = percent;
    this.status = status;
    this.date = date;
    this.location = location;
    this.method = method;
  }
}

export class MerchantTransaction extends Transaction {
  constructor({
    vendor = {},
    receiver,
    amount,
    percent,
    status,
    date,
    location,
    method,
    id = 1,
    ...rest
  }) {
    super({ vendor, receiver, amount, percent, status, date, location, method, id });
    this.merchant = rest.merchant;
  }
}
