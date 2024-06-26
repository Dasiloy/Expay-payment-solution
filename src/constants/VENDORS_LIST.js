import faker from '@faker-js/faker';
import { Vendor } from 'classes';

const paymentHistory = [
  {
    amount: 560,
    commission: 760,
    transactionId: faker.datatype.uuid(),
    type: 'CARD',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti architecto repudiandae facilis dolore quibusdam provident. Et nobis possimus aliquam!',
    date: 'Aug 23 1998',
    status: 'pending',
  },
  {
    amount: 4350,
    commission: 670,
    transactionId: faker.datatype.uuid(),
    type: 'CARD',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti architecto repudiandae facilis dolore quibusdam provident. Et nobis possimus aliquam!',
    date: 'Aug 23 1998',
    status: 'completed',
  },
  {
    amount: 450,
    commission: 200,
    transactionId: faker.datatype.uuid(),
    type: 'CARD',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti architecto repudiandae facilis dolore quibusdam provident. Et nobis possimus aliquam!',
    date: 'Aug 23 1998',
    status: 'failed',
  },
  {
    amount: 490,
    commission: 56,
    transactionId: '',
    type: 'CARD',
    description:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus deleniti architecto repudiandae facilis dolore quibusdam provident. Et nobis possimus aliquam!',
    date: 'Aug 23 1998',
    status: 'pending',
  },
];

const vendorList = [
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar.jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (1).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (2).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (3).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (4).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (5).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (6).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (7).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (8).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (9).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (10).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (11).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (12).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (13).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (14).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (15).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (16).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (17).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (18).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (19).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    id: 2,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (20).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (21).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (22).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (23).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (24).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '/images/avatar (25).jpg',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'inactive',
    paymentHistory,
  }),
  new Vendor({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    avatarUrl: '',
    lastCredit: 76,
    lastCreditDate: '21 Oct 2020',
    balanceForeign: 68,
    balanceLocal: 4000,
    lastDebit: 76,
    lastDebitDate: '21 Nov 2020',
    _status: 'active',
    paymentHistory,
  }),
].map((vendor, i) => {
  if (i % 3 === 0) {
    return {
      ...vendor,
      status: 'failed',
    };
  } else if (i % 3 === 1) {
    return {
      ...vendor,
      status: 'completed',
    };
  } else {
    return {
      ...vendor,
      status: 'pending',
    };
  }
});

export default vendorList;
