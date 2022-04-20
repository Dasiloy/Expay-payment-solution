import React from 'react';
import faker from '@faker-js/faker';
import { Merchant } from 'classes';
import vendorList from './VENDORS_LIST';
import { merchantAdminList as admins } from './MERCHANT_ADMINS';

// merchant verification status
export const PENDING = 'pending verification';
export const VERIFIED = 'verified';
export const UNVERIFIED = 'unverified';

export const merchantList = vendorList.map((_, i) => {
  if ((i & 3) === 0) {
    return new Merchant({
      firstName: 'John',
      lastName: 'Doe',
      email: 'frolancer@support.gmail',
      avatarUrl: '/images/avatar.jpg',
      password: '3245634312ghtrd',
      createdAt: '2020-01-01T00:00:00.000Z',
      verificationStatus: VERIFIED,
      companyName: 'Frolancer',
      companyAddress: 'block 43, New York',
      companyWebsite: 'frolancer.com',
      admins,
      vendors: vendorList,
      paymentHistory: [
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
      ],
      credentials: [
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-1.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-2.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-4.jpg',
        },
      ],
      wallet: {
        balance: 600,
        totalAmountReceived: 8000,
        totalPayouts: 450,
        percentTotal: 2,
      },
      bankInfo: {
        name: 'Access bank Nigeria',
        accountNumber: '0063969987',
      },
    });
  } else if ((i & 3) === 1) {
    return new Merchant({
      firstName: 'John',
      lastName: 'Doe',
      email: 'frolancer@support.gmail',
      avatarUrl: '/images/avatar.jpg',
      password: '3245634312ghtrd',
      createdAt: '2020-01-01T00:00:00.000Z',
      verificationStatus: UNVERIFIED,
      companyName: 'Frolancer',
      companyAddress: 'block 43, New York',
      companyWebsite: 'frolancer.com',
      admins,
      vendors: vendorList,
      paymentHistory: [
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
      ],
      credentials: [
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-1.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-4.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-3.jpg',
        },
      ],
      wallet: {
        balance: 600,
        totalAmountReceived: 8000,
        totalPayouts: 450,
        percentTotal: 2,
      },
      bankInfo: {
        name: 'Access bank Nigeria',
        accountNumber: '0063969987',
      },
    });
  } else {
    return new Merchant({
      firstName: 'John',
      lastName: 'Doe',
      email: 'frolancer@support.gmail',
      avatarUrl: '/images/avatar.jpg',
      password: '3245634312ghtrd',
      createdAt: '2020-01-01T00:00:00.000Z',
      verificationStatus: PENDING,
      companyName: 'Frolancer',
      companyAddress: 'block 43, New York',
      companyWebsite: 'frolancer.com',
      admins,
      vendors: vendorList,
      paymentHistory: [
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
        {
          id: faker.datatype.uuid(),
          amount: 100,
          method: 'CARD',
          createdAt: '2020-01-01T00:00:00.000Z',
        },
      ],
      credentials: [
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-1.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-2.jpg',
        },
        {
          title: 'Proof of Work',
          imageUrl: '/images/blog-3.jpg',
        },
      ],
      wallet: {
        balance: 600,
        totalAmountReceived: 8000,
        totalPayouts: 450,
        percentTotal: 2,
      },
      bankInfo: {
        name: 'Access bank Nigeria',
        accountNumber: '0063969987',
      },
    });
  }
});
