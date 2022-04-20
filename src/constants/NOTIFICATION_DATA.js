import { set, sub } from 'date-fns';
import {
  SubscriptionNotification,
  MailNotification,
  ChatNotification,
  PaymentNotification,
  WithdrawalNotification,
} from 'classes';

// export notifications array
export const Notifications = [
  new PaymentNotification({
    title: 'Your payment has been initiated',
    description: 'waiting for payment confirmation',
    createdAt: set(new Date(), { hours: 10, minutes: 30 }),
    isUnRead: true,
  }),
  new SubscriptionNotification({
    title: 'subscription processing',
    description: 'Your Subscription is being worked on',
    createdAt: sub(new Date(), { hours: 3, minutes: 30 }),
    isUnRead: true,
  }),
  new WithdrawalNotification({
    title: 'You initiated a withdrawal',
    description: 'withdrawal has been initiated',
    createdAt: sub(new Date(), { days: 1, hours: 3, minutes: 30 }),
    isUnRead: false,
  }),
  new MailNotification({
    title: 'You have a new mail',
    description: 'sent from Expay Support',
    createdAt: sub(new Date(), { days: 2, hours: 3, minutes: 30 }),
    isUnRead: false,
  }),
  new ChatNotification({
    title: 'You have new message',
    description: '5 unread messages',
    createdAt: sub(new Date(), { days: 3, hours: 3, minutes: 30 }),
    isUnRead: false,
  }),
];
