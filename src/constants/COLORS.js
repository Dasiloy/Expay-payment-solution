import { PENDING, VERIFIED, UNVERIFIED } from './MERCHANT_LISt';
import { RESSOLVED, UNRESOLVED, PENDING as TICKETPENDING } from './EXPAY_DATA';
import { ACTIVE, INACTIVE, OFFLINE, ONLINE } from './USER_STATUS';

export const green = '#279943';
export const yellow = '#D98C31';
export const gray = '#7D849D';
export const red = '#C4393B';

export const status = {
  completed: 'success',
  pending: 'warning',
  failed: 'error',
  inactive: 'error',
  active: 'primary',
  [VERIFIED]: 'success',
  [RESSOLVED]: 'success',
  [ONLINE]: 'success',
  [ACTIVE]: 'success',
  [TICKETPENDING]: 'warning',
  [PENDING]: 'warning',
  [UNRESOLVED]: 'error',
  [OFFLINE]: 'error',
  [UNVERIFIED]: 'error',
  [INACTIVE]: 'error',
};
