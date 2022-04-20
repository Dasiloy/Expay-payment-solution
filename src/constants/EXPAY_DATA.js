import { MerchantTransaction, Ticket, Message } from 'classes';
import { merchantList } from './MERCHANT_LISt';

export const CREATE = 'Create';
export const EDIT = 'Edit';
export const ADD_MESSAGE = 'Add Message';
export const EDIT_MESSAGE = 'Edit Message';
export const CREATE_ADMIN = 'Create Admin';
export const EDIT_ADMIN = 'Edit Admin';
export const SEE_VENDORS = 'View Vendors';
export const VENDOR_PROFILE = 'View vendor';
export const RESSOLVED = 'Resolved';
export const UNRESOLVED = 'Unresolved';
export const PENDING = 'Pending';

//  merchants tableHeader details for verification
export const MerchantsTableHeader = [
  { id: 'companyName', label: 'Merchant', alignRight: false },
  { id: 'createdAt', label: 'Date joined', alignRight: false },
  { id: ' verificationStatus', label: 'Status', alignRight: false },
  { id: '' },
];

// merchant tableHeader with vendor details
export const MerchantsTableHeaderWithVendor = [
  { id: 'companyName', label: 'Name', alignRight: false },
  { id: 'createdAt', label: 'Date joined', alignRight: false },
  { id: 'vendors', label: 'Vendors', alignRight: false },
  { id: 'wallet', label: 'Wallet', alignRight: false },
  { id: 'totalamount', label: 'Total Received', alignRight: false },
  { id: 'commissions', label: 'Commissions %', alignRight: false },
  { id: '' },
];

// merchant payment tableHeader with payment details
export const MerchantsTableHeaderWithPayment = [
  { id: 'amount', label: 'Amount', alignRight: false },
  { id: 'method', label: 'Payment Method', alignRight: false },
  { id: 'createdAt', label: 'Date', alignRight: false },
];

// merchants vendors tableHeader details
export const MerchantsVendorsTableHeader = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'lastCredit', label: 'Last Credit', alignRight: false },
  { id: 'lastCreditDate', label: 'Last Credit Date', alignRight: false },
  { id: 'balanceForeign', label: 'Balance($)', alignRight: false },
  { id: 'balanceLocal', label: 'Balance Local', alignRight: false },
  { id: 'lastDebit', label: 'last Debit', alignRight: false },
  { id: 'lastDebitDate', label: 'Last Debit Date', alignRight: false },
  { id: '_status', label: 'Status', alignRight: false },
];

// merchants transactions tableHeader details
export const MerchantsTransactionsTableHeader = [
  { id: 'merchant', label: 'Merchant', alignRight: false },
  { id: 'client', label: 'Client', alignRight: false },
  { id: 'vendor', label: 'Vendor', alignRight: false },
  { id: 'amount', label: 'Amount($)', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: '' },
];

// vendor profile table data tableHeader details
export const VendorProfileTableHeader = [
  { id: 'transaction', label: 'Transaction', alignRight: false },
  { id: 'amount', label: 'Amount($)', alignRight: false },
  { id: 'commission', label: 'Commission($)', alignRight: false },
  { id: 'description', label: 'Description', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// vendor profile table data tableHeader details
export const HelpTableHeader = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'topic', label: 'Topic', alignRight: false },
  { id: '' },
];

// vendor profile table data tableHeader details
export const MiniHelpTableHeader = [
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: 'topic', label: 'Topic', alignRight: false },
  { id: '' },
];

// vendor profile table data tableHeader details
export const MessageTableHeader = [
  { id: 'title', label: 'Message Title', alignRight: false },
  { id: 'content', label: 'Content', alignRight: false },
  { id: 'date', label: 'Date', alignRight: false },
  { id: 'recipient', label: 'Recipient', alignRight: false },
  { id: '' },
];

// admins tableheader
export const AdminTableHeader = [
  { id: 'name', label: 'Name', alignRight: false },
  { id: 'email', label: 'Email', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  { id: 'created', label: 'Date Created', alignRight: false },
  { id: 'online', label: 'Online status', alignRight: false },
  { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];

// message list
export const MessageList = [
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
  new Message({
    media: [],
    title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    content:
      'quia nisi quidem, perferendis saepe error quos quod fugit sunt? Dignissimos, quisquam.',
    date: 'Aug 12 2021',
    recipient: merchantList[0],
  }),
];

// ticket list
export const ticketList = [
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: RESSOLVED,
    topic: 'How to add a new vendor',
  }),
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: RESSOLVED,
    topic: 'How to add a new vendor',
  }),
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: UNRESOLVED,
    topic: 'How to add a new vendor',
  }),
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: PENDING,
    topic: 'How to add a new vendor',
  }),
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: PENDING,
    topic: 'How to add a new vendor',
  }),
  new Ticket({
    name: 'John Doe',
    date: '12/12/2019',
    status: UNRESOLVED,
    topic: 'How to add a new vendor',
  }),
];

// help data
export const helpData = [
  {
    title: 'Feedback 1',
    value: 4356,
    percent: 60,
  },
  {
    title: 'Feedback 2',
    value: 435,
    percent: 10,
  },
  {
    title: 'Feedback 3',
    value: 356,
    percent: 18,
  },
  {
    title: 'Feedback 4',
    value: 336,
    percent: 42,
  },
  {
    title: 'Feedback 5',
    value: 436,
    percent: 52,
  },
];

// merchants transactions
export const TransactionList = merchantList
  .map((merchant) => {
    return new MerchantTransaction({
      id: merchant.id,
      merchant,
      receiver: 'James Bond',
      vendor: merchant.vendors[0],
      amount: 800,
      percent: 2,
      date: '23 Aug 2012',
      location: 'Lagos',
      method: 'Card',
    });
  })
  .map((transaction, i) => {
    if (i % 3 === 0) {
      return {
        ...transaction,
        status: 'failed',
      };
    } else if (i % 3 === 1) {
      return {
        ...transaction,
        status: 'completed',
      };
    } else {
      return {
        ...transaction,
        status: 'pending',
      };
    }
  });
