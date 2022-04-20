import React from 'react';
import ADashboard from './components';
import Topbar from './components/topbar';
import { MuiBox } from 'muibase';
import { FilterGroup, Table, MerchantTransactionTableBody } from 'components';
import { TransactionList, MerchantsTransactionsTableHeader } from 'constants';
import NextScreenwrapper from './components/nextScreenwrapper';
export default function ADashboardPageT() {
  const [isNextScreen, setIsNextScreen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [action, setAction] = React.useState('');

  // handle subpage navigation
  const moveFwd = () => {
    setIsNextScreen(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  const moveBack = () => {
    setIsNextScreen(false);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // open vendor profile payment history
  const openVendorProfile = (item = {}, action = '') => {
    setAction(action);
    setSelectedItem(item);
    moveFwd();
  };

  // reset screen
  const reset = () => {
    setSelectedItem(null);
    setAction('');
    moveBack();
  };

  if (isNextScreen) {
    return (
      <ADashboard>
        <MuiBox data-aos={'fade-left'}>
          <Topbar title={'Vendor Profile'} />
          <NextScreenwrapper action={action} reset={reset} merchant={selectedItem} />
        </MuiBox>
      </ADashboard>
    );
  }

  return (
    <ADashboard>
      <Topbar title={'Transactions'} />
      <MuiBox marginY={8} />
      <FilterGroup title={'Actions'} />
      <Table
        headData={MerchantsTransactionsTableHeader}
        bodyData={TransactionList}
        label={'status'}
      >
        <MerchantTransactionTableBody openVendorProfile={openVendorProfile} />
      </Table>
    </ADashboard>
  );
}
