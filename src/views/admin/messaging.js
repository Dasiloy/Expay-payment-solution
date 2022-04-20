import React from 'react';
import { PrimaryButton } from 'styled';
import ADashboard from './components';
import Topbar from './components/topbar';
import { MuiBox } from 'muibase';
import { FilterGroup, Table, MessagetableBody } from 'components';
import NextScreenwrapper from './components/nextScreenwrapper';
import { MessageTableHeader, MessageList } from 'constants';
// import actions controller
import { ADD_MESSAGE, EDIT_MESSAGE } from 'constants';
export default function ADashboardPageMessaging() {
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
  // handle creating or updating message
  const handleUpdate = (item, action) => {
    setSelectedItem(item);
    setAction(action);
    if (item && action === EDIT_MESSAGE) {
      setIsUpdating(true);
    } else if (action === ADD_MESSAGE) {
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
          <Topbar title={'Create message'} />
          <NextScreenwrapper action={action} reset={reset} merchant={selectedItem} />
        </MuiBox>
      </ADashboard>
    );
  }

  return (
    <ADashboard>
      <Topbar title={'Messaging'}>
        <PrimaryButton
          sx={{ paddingX: 3.5, paddingY: 0.8 }}
          onClick={(e) => handleUpdate(null, ADD_MESSAGE)}
        >
          New message
        </PrimaryButton>
      </Topbar>
      <MuiBox marginY={8} />
      <FilterGroup title={'Actions'} />
      <Table headData={MessageTableHeader} bodyData={MessageList} label={'title'}>
        <MessagetableBody />
      </Table>
    </ADashboard>
  );
}
