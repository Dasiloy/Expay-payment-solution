import { Widget, Transaction, Subscription, Withdrawal } from 'classes';
import { gray, green, red, yellow } from './COLORS';

// import vendor  list
import vendorList from './VENDORS_LIST';

// dashboard widgets
const balance = new Widget('Balance', 3400, gray, true);
const received = new Widget('Received', 3400, gray, true);
const payoutsDashboard = new Widget('Payouts', 3000, gray, true);
const commissions = new Widget('Commission', 400, gray, true);
export const adminWidgets = [balance, received, payoutsDashboard, commissions];

//  transactions tableHeader details
export const transactionsTableHeader = [
  { id: 'client', label: 'Client', alignRight: false },
  { id: 'receiver', label: 'Receiver', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'commission', label: 'Commission', alignRight: false },
  { id: 'percent', label: 'Percent', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'location', label: 'Location', alignRight: false },
  { id: '' },
];
// transaction widgets
const allTransactions = new Widget('All', 4000, gray);
const inProgress = new Widget('In Progress', 600, yellow);
const completed = new Widget('Completed', 1000, green);
const failed = new Widget('Failed', 2000, red);
export const transactionWidgets = [allTransactions, inProgress, completed, failed];
// transaction lists
export const transactionList = vendorList.map(
  (vendor, index) =>
    new Transaction({
      vendor: { ...vendor },
      receiver: 'James Brand',
      amount: 600 * index + 600,
      percent: 3.5,
      status: vendor.status,
      date: '23 Aug 2012',
      location: 'Lagos',
      method: 'Card',
      id: index + 1,
    }),
);

//  subscriptions tableHeader details
export const subscriptionsTableHeader = [
  { id: 'client', label: 'Client', alignRight: false },
  { id: 'receiver', label: 'Receiver', alignRight: false },
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'commission', label: 'Commission', alignRight: false },
  { id: 'percent', label: 'Percent', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'location', label: 'Location', alignRight: false },
  { id: '' },
];
// subscriptions widgets
const allSubscriptions = new Widget('All', 3400, gray);
const monthlyCycle = new Widget('Monthly Cycle', 3000, gray);
const yearlyCycle = new Widget('Yearly Cycle', 400, gray);
export const subscriptionWidgets = [allSubscriptions, monthlyCycle, yearlyCycle];
// subscription lists
export const subscriptionList = vendorList.map(
  (vendor, index) =>
    new Subscription({
      vendor: { ...vendor },
      receiver: 'James Brand',
      amount: 600 * index + 600,
      percent: 3.5,
      status: vendor.status,
      date: '23 Aug 2012',
      location: 'Lagos',
      method: 'Card',
      id: index + 1,
    }),
);

//  vendors tableHeader details
export const VendorsTableHeader = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'lastCredit', label: 'Last Credit', alignRight: false },
  { id: 'lastCreditDate', label: 'Last Credit Date', alignRight: false },
  { id: 'balanceForeign', label: 'Balance($)', alignRight: false },
  { id: 'balanceLocal', label: 'Balance Local', alignRight: false },
  { id: 'lastDebit', label: 'last Debit', alignRight: false },
  { id: 'lastDebitDate', label: 'Last Debit Date', alignRight: false },
  { id: '_status', label: 'Status', alignRight: false },
  { id: '' },
];
// vendor widgets
const totalVendors = new Widget('Vendors', 3400, gray);
const payouts = new Widget('Payouts', 3000, gray, true);
const yearly = new Widget('Yearly', 400, gray);
export const vendorWidgets = [totalVendors, payouts, yearly];

// withdrawal table header
export const WithdrawalHeader = [
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];
// withdrawal widgets
const walletBalance = new Widget('Wallet balance', 500, gray, true);
const totalWithdrawn = new Widget('Withdrawn', 200, gray, true);
const commissionEarned = new Widget('Commission', 250, gray, true);
export const withdrawalWidgets = [walletBalance, totalWithdrawn, commissionEarned];
// withdrawal list
export const withdrawalList = vendorList.map(
  (vendor, i) =>
    new Withdrawal({
      amount: 600 * i + 600,
      status: vendor.status,
      date: '23 Aug 2012',
    }),
);
