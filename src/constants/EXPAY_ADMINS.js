import { ExpayAdmin } from 'classes';
import { ACTIVE, INACTIVE, OFFLINE, ONLINE } from './USER_STATUS';

// expay admins permissions
export const EXPAY_VIEW_FINANCES = 'Finances';
export const EXPAY_VIEW_VENDORS = 'Vendors';
export const EXPAY_VIEW_MERCHANTS = 'Merchants';
export const EXPAY_MANAGE_CONTENT = 'Content';
export const EXPAY_MESSAGE_USERS = 'Messages';
export const EXPAY_MANAGE_ADMINS = 'Admins';

// Super admin
export const SUPER_ADMIN = {
  title: 'Admin',
  permissions: [
    EXPAY_MANAGE_ADMINS,
    EXPAY_MESSAGE_USERS,
    EXPAY_VIEW_FINANCES,
    EXPAY_MANAGE_CONTENT,
    EXPAY_VIEW_MERCHANTS,
    EXPAY_VIEW_VENDORS,
  ],
};

// Editor admin
export const EDITOR_ADMIN = {
  title: 'Editor',
  permissions: [EXPAY_MANAGE_CONTENT, EXPAY_VIEW_MERCHANTS, EXPAY_VIEW_VENDORS],
};

// Marketter admin
export const MARKETER_ADMIN = {
  title: 'Marketer',
  permissions: [EXPAY_VIEW_MERCHANTS, EXPAY_VIEW_VENDORS],
};

// Customer relation admin
export const CUSTOMER_RELATION_ADMIN = {
  title: 'Customer Relations',
  permissions: [EXPAY_VIEW_MERCHANTS, EXPAY_VIEW_VENDORS, EXPAY_MESSAGE_USERS],
};

// custom admin
export const CUSTOM_ADMIN = {
  title: 'Custom Admin',
  // can have an array of multiple permissions
  permissions: [],
};

// admins type collection
export const EXPAY_ADMIN_TYPES = [
  SUPER_ADMIN,
  EDITOR_ADMIN,
  MARKETER_ADMIN,
  CUSTOMER_RELATION_ADMIN,
  CUSTOM_ADMIN,
];

// roles
export const roles = ['Admin', 'Editor', 'Marketer', 'Customer Relations', 'Custom Admin'];
const _one = new ExpayAdmin({
  firstName: 'elvis',
  lastName: 'Duru',
  email: 'elvisduru@gmail.com',
  avatarUrl: '/images/avatar (3).jpg',
  createdAt: '2019-09-09',
  title: SUPER_ADMIN.title,
  onlineStatus: ONLINE,
  status: ACTIVE,
  permissions: SUPER_ADMIN.permissions,
});

const _two = new ExpayAdmin({
  firstName: 'Rally',
  lastName: 'Thomas',
  email: 'thomas@gmail.com',
  avatarUrl: '/images/avatar (5).jpg',
  createdAt: '2019-09-09',
  title: CUSTOMER_RELATION_ADMIN.title,
  onlineStatus: OFFLINE,
  status: INACTIVE,
  permissions: CUSTOMER_RELATION_ADMIN.permissions,
});

export const expayAdminList = [_one, _two];
export const expayPermissions = [
  EXPAY_VIEW_FINANCES,
  EXPAY_VIEW_VENDORS,
  EXPAY_VIEW_MERCHANTS,
  EXPAY_MANAGE_CONTENT,
  EXPAY_MESSAGE_USERS,
  EXPAY_MANAGE_ADMINS,
];
