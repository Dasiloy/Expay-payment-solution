import faker from '@faker-js/faker';
import { USER_PENDING } from 'constants/USER_VERIFICATION_STATUS';

class User {
  constructor({
    firstName = '',
    lastName = '',
    email = '@mail.com',
    avatarUrl = '',
    password = '',
    createdAt = '',
    verificationStatus = USER_PENDING,
    bankInfo = {
      Name: '',
      accountNumber: '',
    },
    status = 'INACTIVE',
    onlineStatus = 'OFFLINE',
  }) {
    this.id = faker.datatype.uuid();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.avatarUrl = avatarUrl;
    this.password = password;
    this.createdAt = createdAt;
    this.verificationStatus = verificationStatus;
    this.bankInfo = bankInfo;
    this.status = status;
    this.onlineStatus = onlineStatus;
  }
}

export class Admin extends User {
  constructor({ firstName = '', lastName = '', email, ...rest }) {
    super({ firstName, lastName, email, ...rest });
    this.role = 'admin';
    this.admins = rest.admins;
    this.title = rest.title;
    this.permissions = rest.permissions;
  }
}

export class MerChantAdmin extends Admin {
  constructor({ firstName = '', lastName = '', email = '', ...rest }) {
    super({ firstName, lastName, email, ...rest });
    this.type = 'merchant_admin';
  }
}

export class ExpayAdmin extends Admin {
  constructor({ firstName = '', lastName = '', email = '', ...rest }) {
    super({ firstName, lastName, email, ...rest });
    this.type = 'expay_admin';
  }
}

export class Merchant extends User {
  constructor({
    firstName = '',
    lastName = '',
    email,
    admins = [],
    paymentHistory = [],
    credentials = {},
    vendors = [],
    wallet = {},
    ...rest
  }) {
    super({ firstName, lastName, email, ...rest });
    this.role = 'merchant';
    this.admins = admins;
    this.companyName = rest.companyName;
    this.companyAddress = rest.companyAddress;
    this.companyWebsite = rest.companyWebsite;
    this.credentials = credentials;
    this.vendors = vendors;
    this.paymentHistory = paymentHistory;
    this.wallet = wallet;
  }
  updateAdmin(item) {
    const updated = [...this.admins].map((admin) => {
      const found = admin.id === item.id;
      return found ? item : admin;
    });
    this.admins = updated;
    return updated;
  }
  addAdmin(item) {
    const latestAddition = new MerChantAdmin({ ...item });
    const updated = [latestAddition, ...this.admins];
    this.admins = updated;
    return updated;
  }
  removeAdmin(id) {
    const updated = [...this.admins].filter((admin) => admin.id !== id);
    this.admins = updated;
    return updated;
  }
}

export class Vendor extends User {
  constructor({
    firstName = '',
    lastName = '',
    email,
    paymentHistory = [
      {
        amount: 0,
        commission: 0,
        transactionId: '',
        type: '',
        description: '',
        date: '',
        status: '',
      },
    ],
    ...rest
  }) {
    super({ firstName, lastName, email, ...rest });
    this.role = 'vendor';
    this.lastCredit = rest.lastCredit;
    this.lastCreditDate = rest.lastCreditDate;
    this.balanceForeign = rest.balanceForeign;
    this.balanceLocal = rest.balanceLocal;
    this.lastDebit = rest.lastDebit;
    this.lastDebitDate = rest.lastDebitDate;
    this._status = rest._status;
    this.paymentHistory = paymentHistory;
  }
}
