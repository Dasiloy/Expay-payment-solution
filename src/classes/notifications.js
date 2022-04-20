// faker library for unique id
import { faker } from '@faker-js/faker';
// import default Avatar for notifications
import MailIcon from '../../public/icons/ic_notification_mail.svg';
import ChatIcon from '../../public/icons/ic_notification_chat.svg';
import PaymentIcon from '../../public/icons/ic_notification_shipping.svg';

// notifications type
export const mailType = 'mail';
export const paymentType = 'payment';
export const subscriptionType = 'subscription';
export const withdrawalType = 'withdrawal';
export const chatType = 'chat';

export class Notification {
  constructor({ title = '', description = '', createdAt = new Date(), isUnRead = false }) {
    this.id = faker.datatype.uuid();
    this.title = title;
    this.description = description;
    this.createdAt = createdAt;
    this.isUnRead = isUnRead;
  }
}

export class MailNotification extends Notification {
  constructor({ title, description, ...rest }) {
    super({ title, description, ...rest });
    this.avatar = MailIcon;
    this.type = mailType;
  }
}

export class ChatNotification extends Notification {
  constructor({ title, description, ...rest }) {
    super({ title, description, ...rest });
    this.avatar = ChatIcon;
    this.type = chatType;
  }
}

export class PaymentNotification extends Notification {
  constructor({ title, description, ...rest }) {
    super({ title, description, ...rest });
    this.avatar = PaymentIcon;
    this.type = paymentType;
  }
}

export class SubscriptionNotification extends Notification {
  constructor({ title, description, ...rest }) {
    super({ title, description, ...rest });
    this.avatar = PaymentIcon;
    this.type = subscriptionType;
  }
}

export class WithdrawalNotification extends Notification {
  constructor({ title, description, ...rest }) {
    super({ title, description, ...rest });
    this.avatar = PaymentIcon;
    this.type = withdrawalType;
  }
}
