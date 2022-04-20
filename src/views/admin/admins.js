import React from 'react';
import { PrimaryButton } from 'styled';
import ADashboard from './components';
import Topbar from './components/topbar';
import { MuiBox } from 'muibase';
import { FilterGroup, Table, AdminTableBody } from 'components';
import NextScreenwrapper from './components/nextScreenwrapper';
// import actions controller
import { CREATE_ADMIN, expayAdminList, AdminTableHeader } from 'constants';
import { EDIT_ADMIN } from 'constants';
export default function ADashboardPageA() {
  // state variables
  const [isNextScreen, setIsNextScreen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(null);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [action, setAction] = React.useState('');

  // open admin delete dialog dialog
  const openDialog = (item) => {
    setSelectedItem(item);
    setIsDialogOpen(true);
  };

  // close admin delete dialog dialog
  const closeDialog = (status) => {
    if (status === 'proceed') {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setIsDialogOpen(false);
        setSelectedItem(null);
      }, 3000);
      return;
    }
    setSelectedItem(null);
    setIsDialogOpen(false);
  };

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
    setSelectedItem(null);
  };

  // handle creating or updating merchants or seeing vendors
  const handleUpdate = (item, action) => {
    if (action === CREATE_ADMIN) {
      setSelectedItem({
        firstName: '',
        lastName: '',
        email: '',
        title: '',
        permissions: [],
      });
    } else if (action === EDIT_ADMIN) {
      setSelectedItem({ ...item });
    }
    setAction(action);
    moveFwd();
  };

  // handle editing process
  const onChange = (e) => {
    const { name, value } = e.target;
    setSelectedItem({
      ...selectedItem,
      [name]: value,
    });
  };

  // update admin permissions
  const onPermissionChange = (permits, value) => {
    const modified = {
      ...selectedItem,
      permissions: permits,
      title: value,
    };

    setSelectedItem(modified);
  };

  // reset screen
  const reset = () => {
    setAction('');
    moveBack();
  };

  if (isNextScreen) {
    return (
      <ADashboard>
        <MuiBox data-aos={'fade-left'}>
          <Topbar title={'Admins'} />
          <NextScreenwrapper
            action={action}
            reset={reset}
            admin={selectedItem}
            onChange={onChange}
            onPermissionChange={onPermissionChange}
          />
        </MuiBox>
      </ADashboard>
    );
  }
  return (
    <ADashboard>
      <Topbar title={'Admins'}>
        <PrimaryButton
          sx={{ paddingX: 3.5, paddingY: 0.8 }}
          onClick={(e) => handleUpdate(null, CREATE_ADMIN)}
        >
          Create
        </PrimaryButton>
      </Topbar>
      <MuiBox marginY={8} />
      <FilterGroup title={'Actions'} />
      <Table headData={AdminTableHeader} bodyData={expayAdminList} label={'firstName'}>
        <AdminTableBody
          closeDialog={closeDialog}
          isDialogOpen={isDialogOpen}
          openDialog={openDialog}
          loading={loading}
          handleUpdate={handleUpdate}
        />
      </Table>
    </ADashboard>
  );
}
