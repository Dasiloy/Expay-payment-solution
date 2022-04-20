import React from 'react';
// component
import { Iconify } from 'components';

// returns an iconify component
const getIcon = (name) => <Iconify icon={name} width={22} height={22} />;

export const merchantSidebarLinks = [
  {
    title: 'Dashboard',
    path: '/merchant',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Transaction History',
    path: '/merchant/transaction',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Subscriptions',
    path: '/merchant/subscriptions',
    icon: getIcon('eva:shopping-bag-fill'),
  },
  {
    title: 'Vendors',
    path: '/merchant/vendors',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Withdrawals',
    path: '/merchant/withdrawals',
    icon: getIcon('fluent:building-bank-link-28-filled'),
  },
  {
    title: 'Help and Support',
    path: '/merchant/help',
    icon: getIcon('carbon:help-filled'),
  },
];

export const merchantExtra = [
  {
    title: 'Settings',
    path: '/merchant/settings',
    icon: getIcon('ci:settings-filled'),
  },
];

//admin sidebar links
export const adminSidebarLinks = [
  {
    title: 'Dashboard',
    path: '/admin',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'Verifications',
    path: '/admin/verifications',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Merchants',
    path: '/admin/merchants',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Transaction History',
    path: '/admin/transactions',
    icon: getIcon('eva:file-text-fill'),
  },
  {
    title: 'Messaging',
    path: '/admin/messaging',
    icon: getIcon('majesticons:chats-2-line'),
  },
  {
    title: 'Admins',
    path: '/admin/admins',
    icon: getIcon('eva:people-fill'),
  },
  {
    title: 'Help and Support',
    path: '/admin/help',
    icon: getIcon('carbon:help-filled'),
  },
];
