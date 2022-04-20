import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox } from 'muibase';
import Vendorslist from './vendorslist';
import MerchantForm from './merchantForm';
import MessageForm from './messageForm';
import VendorProfile from './vendorProfile';
import CreateAdmin from './adminform';
import {
  CREATE,
  EDIT,
  SEE_VENDORS,
  VENDOR_PROFILE,
  ADD_MESSAGE,
  CREATE_ADMIN,
  EDIT_ADMIN,
} from 'constants';

function NextScreenwrapper({
  action = '',
  merchant = {},
  reset = () => {},
  admin = {},
  onChange = () => {},
  onPermissionChange = () => {},
}) {
  return (
    <MuiBox marginTop={-2}>
      {action === SEE_VENDORS && <Vendorslist merchant={merchant} reset={reset} />}
      {(action === EDIT || action === CREATE) && (
        <MerchantForm merchant={merchant} reset={reset} action={action} />
      )}
      {action === VENDOR_PROFILE && <VendorProfile merchant={merchant} reset={reset} />}
      {action === ADD_MESSAGE && <MessageForm merchant={merchant} reset={reset} action={action} />}
      {(action === CREATE_ADMIN || action === EDIT_ADMIN) && (
        <CreateAdmin
          admin={admin}
          reset={reset}
          action={action}
          onChange={onChange}
          onPermissionChange={onPermissionChange}
        />
      )}
    </MuiBox>
  );
}

NextScreenwrapper.propTypes = {
  action: PropTypes.string.isRequired,
  reset: PropTypes.func.isRequired,
  merchant: PropTypes.object.isRequired,
};

export default NextScreenwrapper;
