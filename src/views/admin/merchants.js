import React from 'react';
import ADashboard from './components';
import { PrimaryButton } from 'styled';
import Topbar from './components/topbar';
import { MuiBox } from 'muibase';
import { FilterGroup, Table, MerchantsTableBody } from 'components';
import { MerchantsTableHeaderWithVendor, merchantList } from 'constants';
import NextScreenwrapper from './components/nextScreenwrapper';
// import actions controller
import { CREATE, EDIT } from 'constants';

export default function ADashboardPageM() {
  // state variables
  const [isUpdating, setIsUpdating] = React.useState(false);
  const [isCreating, setIsCreating] = React.useState(false);
  const [isNextScreen, setIsNextScreen] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
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

  // handle creating or updating merchants or seeing vendors
  const handleUpdate = (item, action) => {
    setSelectedItem(item);
    setAction(action);
    if (item && action === EDIT) {
      setIsUpdating(true);
    } else if (action === CREATE) {
      setIsCreating(true);
    }
    moveFwd();
  };

  // reset screen
  const reset = () => {
    setIsCreating(false);
    setIsUpdating(false);
    setSelectedItem(null);
    setAction('');
    moveBack();
  };

  if (isNextScreen) {
    return (
      <ADashboard>
        <MuiBox data-aos={'fade-left'}>
          <Topbar title={'Merchants'} />
          <NextScreenwrapper action={action} reset={reset} merchant={selectedItem} />
        </MuiBox>
      </ADashboard>
    );
  }
  return (
    <ADashboard>
      <MuiBox data-aos={'fade-left'}>
        <Topbar title={'Merchants'}>
          <PrimaryButton
            sx={{ paddingX: 3.5, paddingY: 0.8 }}
            onClick={(e) => handleUpdate(null, CREATE)}
          >
            Create
          </PrimaryButton>
        </Topbar>
        <MuiBox marginY={8} />
        <FilterGroup title={'Actions'} />
        <Table
          headData={MerchantsTableHeaderWithVendor}
          bodyData={merchantList}
          label={'companyName'}
        >
          <MerchantsTableBody handleUpdate={handleUpdate} />
        </Table>
      </MuiBox>
    </ADashboard>
  );
}
