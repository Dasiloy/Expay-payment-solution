/* eslint-disable camelcase */
import { Stat } from 'classes';
// on expay admin  page on admin side
const total_users = new Stat({
  title: 'All Users',
  value: 100000,
  icon: 'eva:people-fill',
});
const total_merchant = new Stat({
  title: 'Merchants',
  value: 100000,
  icon: 'eva:people-fill',
});
const total_vendors = new Stat({
  title: 'Vendors',
  value: 12000,
  icon: 'eva:people-fill',
});
const tonal_payments = new Stat({
  title: 'Payment',
  value: '$87000',
  icon: 'fluent:building-bank-16-filled',
});
const total_commissions = new Stat({
  title: 'Commission ',
  value: '$1000',
  icon: 'fluent:building-bank-16-filled',
});
export const dashboardStats = [
  total_users,
  total_merchant,
  total_vendors,
  tonal_payments,
  total_commissions,
];
// on merchants page on admin side
const total_merchants = new Stat({
  title: 'Total',
  value: 100000,
  icon: 'eva:people-fill',
});
const verified_merchants = new Stat({
  title: 'Verified',
  value: 12000,
  icon: 'eva:people-fill',
});
const pending_merchants = new Stat({
  title: 'Pending',
  value: 2000,
  icon: 'eva:people-fill',
});
const unverified_merchants = new Stat({
  title: 'Unverified ',
  value: 1000,
  icon: 'eva:people-fill',
});
export const merchantsStats = [
  total_merchants,
  verified_merchants,
  pending_merchants,
  unverified_merchants,
];

// on tickets page on admin side
const total_tickets = new Stat({
  title: 'Total',
  value: 100,
  icon: 'icon-park-outline:tickets-one',
});
const ressolved_tickets = new Stat({
  title: 'Ressolved',
  value: 70,
  icon: 'icon-park-outline:tickets-one',
});
const unresolved_tickets = new Stat({
  title: 'Unresolved',
  value: 10,
  icon: 'icon-park-outline:tickets-one',
});
export const helpStats = [total_tickets, ressolved_tickets, unresolved_tickets];

// vendor profile page stats
const dollarbalance = new Stat({
  title: 'Balance ($)',
  value: '$1000',
  icon: 'fluent:building-bank-16-filled',
});

const nairaBalance = new Stat({
  title: 'Balance (₦)',
  value: '₦1000',
  icon: 'fluent:building-bank-16-filled',
});

const totalCredit = new Stat({
  title: 'Total Credit',
  value: '$1000',
  icon: 'fluent:building-bank-16-filled',
});
export const vendorProfileStats = [dollarbalance, nairaBalance, totalCredit];
