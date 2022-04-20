import { Merchant, Vendor, Admin } from 'classes';
import { USER_PENDING } from './USER_VERIFICATION_STATUS';
import { merchantAdminList } from './MERCHANT_ADMINS';
import {
  expayAdminList,
  EXPAY_HELP_AND_SUPPORT,
  EXPAY_MANAGE_SUBSCRIPTIONS,
  EXPAY_VIEW_TRANSACTION_HISTORY,
  EXPAY_VIEW_VENDORS,
  EXPAY_WITHDRAWALS,
} from './EXPAY_ADMINS';

// if the current user is an expay admin
export const adminUser = new Admin({
  firstName: 'Mobu',
  lastName: 'Eberendu',
  email: 'frolancer@support.gmail',
  avatarUrl: '/images/avatar (9).jpg',
  admins: expayAdminList,
  title: 'Admin',
  permissions: [
    EXPAY_VIEW_TRANSACTION_HISTORY,
    EXPAY_VIEW_VENDORS,
    EXPAY_MANAGE_SUBSCRIPTIONS,
    EXPAY_WITHDRAWALS,
    EXPAY_HELP_AND_SUPPORT,
  ],
  password: '3245634312ghtrd',
});

// if the current user is a merchant
export const merchantUser = new Merchant({
  firstName: 'John',
  lastName: 'Doe',
  email: 'frolancer@support.gmail',
  avatarUrl: '/images/avatar.jpg',
  verificationStatus: USER_PENDING,
  admins: merchantAdminList,
  password: '3245634312ghtrd',
  companyName: 'Frolancer',
  companyAddress: 'block 43, New York',
  companyWebsite: 'frolancer.com',
});

// export const vendorUser = new Vendor();
