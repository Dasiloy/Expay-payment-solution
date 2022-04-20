import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { MuiBox, MuiGrid, MuiModal } from 'muibase';
import FormTitle from './formtitle';
import { SubBody, TextButton } from 'styled';
import { merchantUser as user } from 'constants/ACTIVE_USER';
import { Iconify } from 'components';

// import creation and deletion modal
import CreateAdmin from './createadminform';
import EditAdmin from './editadminform';

// single admin card
import Singleadmincard from './singleadmincard';

// import delete dialog
import { DeleteDialog } from 'components';

// import feedback modal
import { FeedbackModal } from 'components';

export default function Admin() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const { admins } = user;
  const [isProvidingFeedback, setIsProvidingFeedback] = React.useState();
  const [loading, setLoading] = React.useState(false);
  const [list, setList] = React.useState([...admins]);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [activeAdmin, setActiveAdmin] = React.useState({});
  const [openUpdateModal, setOpenUpdateModal] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [permits, setPermits] = React.useState([]);

  //handle permissions change
  const handlePermits = (_permits) => {
    const newPermits = [];
    for (const key in _permits) {
      if (Object.hasOwnProperty.call(_permits, key)) {
        const element = _permits[key];
        if (element) {
          newPermits.push(key);
        }
      }
    }
    setPermits([...newPermits]);
  };

  // handle editing process
  const handleUpdate = (e) => {
    const { name, value } = e.target;
    setActiveAdmin({
      ...activeAdmin,
      [name]: value,
    });
  };

  // open modal for creating or updating admin
  const openUpdatesModal = (_e, item) => {
    if (item) {
      setActiveAdmin(item);
      setIsEditing(true);
    }
    setOpenUpdateModal(true);
  };

  //close modal for updating or editing admin
  const closeAdminProcess = () => {
    setOpenUpdateModal(false);
    setIsEditing(false);
    setActiveAdmin({});
    setPermits([]);
    setIsProvidingFeedback(false);
  };

  //remove admin
  const removeAdmin = (id) => {
    const result = user.removeAdmin(id);
    setList(result);
  };

  // open admin delete dialog dialog
  const openDialog = (item) => {
    setActiveAdmin(item);
    setIsDialogOpen(true);
  };

  // close admin delete dialog dialog
  const closeDialog = (status) => {
    if (status === 'proceed') {
      setLoading(true);
      removeAdmin(activeAdmin.id);
      setTimeout(() => {
        setLoading(false);
        setIsDialogOpen(false);
        setActiveAdmin({});
      }, 3000);
      return;
    }
    setActiveAdmin({});
    setIsDialogOpen(false);
  };

  // save and create or edit admin
  const handleSave = () => {
    setLoading(true);
    const requestBody = { ...activeAdmin, permissions: permits };
    let response = [];
    if (isEditing) {
      response = user.updateAdmin(requestBody);
    } else {
      response = user.addAdmin(requestBody);
    }
    setList(response);
    setTimeout(() => {
      setLoading(false);
      // trigger a feedback
      setIsProvidingFeedback(true);
    }, 3000);
  };

  return (
    <>
      {/* admin creation modal*/}
      <MuiModal
        open={!isEditing && openUpdateModal}
        onClose={closeAdminProcess}
        width={isMd ? 500 : 340}
      >
        {isProvidingFeedback ? (
          <FeedbackModal
            title="Invitation Sent"
            content={`An invitation has been sent to ${activeAdmin.email}`}
            onClose={closeAdminProcess}
            timeout={4000}
          />
        ) : (
          <CreateAdmin
            handleUpdate={handleUpdate}
            activeItemDetails={activeAdmin}
            handlePermits={handlePermits}
            onClose={closeAdminProcess}
            onFinish={handleSave}
            loading={loading}
            isProvidingFeedback={isProvidingFeedback}
          />
        )}
      </MuiModal>
      {/* admin editing modal*/}
      <MuiModal
        open={isEditing && openUpdateModal}
        onClose={closeAdminProcess}
        width={isMd ? 500 : 340}
      >
        {isProvidingFeedback ? (
          <FeedbackModal
            title="Edit Successful"
            content={`You have successfully edited  ${activeAdmin.firstName}'s details`}
            onClose={closeAdminProcess}
            timeout={2000}
          />
        ) : (
          <EditAdmin
            activeItemDetails={activeAdmin}
            handleUpdate={handleUpdate}
            handlePermits={handlePermits}
            onClose={closeAdminProcess}
            onFinish={handleSave}
            isProvidingFeedback={isProvidingFeedback}
            loading={loading}
          />
        )}
      </MuiModal>
      {/* delete dialog*/}
      <DeleteDialog
        loading={loading}
        isDialogOpen={isDialogOpen}
        closeDialog={closeDialog}
        title={`Are you sure you want to remove ${activeAdmin.firstName} from your admin list?`}
        content={'NB: This process once confirmed cannot be undone!'}
      />
      <FormTitle title="Create Admin" subtitle="Manage administrators" alignMent="left">
        <MuiGrid item xs={12} marginBottom={2} alignItems={'center'}>
          <MuiBox marginBottom={2}>
            {list.length > 0 ? (
              list.map((admin) => (
                <Singleadmincard
                  key={admin.id}
                  user={admin}
                  openDialog={openDialog}
                  openUpdatesAdmin={openUpdatesModal}
                />
              ))
            ) : (
              <SubBody>You have no active admins.</SubBody>
            )}
          </MuiBox>
          <TextButton
            onClick={openUpdatesModal}
            sx={{ fontSize: '14px !important' }}
            endIcon={<Iconify icon={'akar-icons:circle-plus'} sx={{ width: 15, height: 15 }} />}
          >
            ADD NEW
          </TextButton>
        </MuiGrid>
      </FormTitle>
    </>
  );
}
