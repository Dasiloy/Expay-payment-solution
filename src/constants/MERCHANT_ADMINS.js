import { MerChantAdmin } from 'classes';

// merchant admins permissions
export const VIEW_VENDORS = 'View Vendors';
export const VIEW_TRANSACTION_HISTORY = 'View transaction history';
export const MANAGE_SUBSCRIPTIONS = 'Manage subscriptions';
export const WITHDRAWALS = 'Withdrawals';
export const HELP_AND_SUPPORT = 'Help and Support';

const _one = new MerChantAdmin({
  firstName: 'elvis',
  lastName: 'Duru',
  email: 'elvisduru@gmail.com',
  avatarUrl: '/images/avatar.jpg',
  title: 'Customer Support',
  permissions: [VIEW_TRANSACTION_HISTORY, VIEW_VENDORS],
});

const _two = new MerChantAdmin({
  firstName: 'Rally',
  lastName: 'Thomas',
  email: 'thomas@gmail.com',
  avatarUrl: '/images/avatar (10).jpg',
  title: 'Finance Admin',
  permissions: [MANAGE_SUBSCRIPTIONS, WITHDRAWALS, HELP_AND_SUPPORT],
});

export const merchantAdminList = [_one, _two];
export const permissions = [
  VIEW_TRANSACTION_HISTORY,
  VIEW_VENDORS,
  MANAGE_SUBSCRIPTIONS,
  WITHDRAWALS,
  HELP_AND_SUPPORT,
];
