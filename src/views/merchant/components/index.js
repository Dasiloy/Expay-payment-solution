import React from 'react';
import PropTypes from 'prop-types';

// merchant dashboard
import { MerchantDashboard } from 'layouts';

// topBar component with title
import Topbar from './Topbar';

// get current user and default verification status
import { USER_VERIFIED, merchantUser } from 'constants';

// verification popUp
import VerificationPopUp from './verifypopup';

function MDashboard({
  title = '',
  isExtra = false,
  isWithdrawal = false,
  isDashBoard = false,
  openWithdrawal = () => {},
  children,
}) {
  const status = merchantUser && merchantUser.verificationStatus;

  return (
    <MerchantDashboard>
      {status !== USER_VERIFIED && <VerificationPopUp />}
      <Topbar
        title={title}
        isExtra={isExtra}
        isDashBoard={isDashBoard}
        isWithdrawal={isWithdrawal}
        openWithdrawal={openWithdrawal}
      />
      {children}
    </MerchantDashboard>
  );
}

export default MDashboard;
MDashboard.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  isExtra: PropTypes.bool,
  isWithdrawal: PropTypes.bool,
  openWithdrawal: PropTypes.func,
};
