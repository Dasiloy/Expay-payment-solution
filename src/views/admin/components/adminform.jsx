import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiModal, MuiBreadcrumbs } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { OutlinedButton, PrimaryButton, HeadingSix, HeadingFive, StyledSelect } from 'styled';
import { FeedbackModal, Container } from 'components';
import { isEqualArray } from 'utils';

// permissions checklist
import Permissions from './permissions';
import { CREATE_ADMIN, EDIT_ADMIN } from 'constants';
import { roles as EXPAY_ADMIN_ROLES, EXPAY_ADMIN_TYPES } from 'constants/EXPAY_ADMINS';

const roles = EXPAY_ADMIN_ROLES.map((role) => ({
  key: role,
  label: role,
  value: role,
}));

export default function CreateAdmin({
  admin: activeItemDetails = {},
  reset,
  action,
  onChange: handleUpdate,
  onPermissionChange,
}) {
  const theme = useTheme();
  const [active, setActive] = React.useState(false);
  const [isProvidingFeedback, setIsProvidingFeedback] = React.useState();
  const [loading, setLoading] = React.useState(false);
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
    let role = '';
    const result = isEqualArray(EXPAY_ADMIN_TYPES, [...newPermits], 'permissions');
    if (result === undefined || result.title === 'Custom Admin') {
      role = 'Custom Admin';
    } else {
      role = result.title;
    }
    onPermissionChange([...newPermits], role);
  };

  //close  updating or editing admin
  const closeAdminProcess = () => {
    setPermits([]);
    setIsProvidingFeedback(false);
    reset();
  };

  // save and create or edit admin
  const handleSave = () => {
    setLoading(true);
    // request body
    const requestBody = { ...activeItemDetails };
    if (action === CREATE_ADMIN) {
      // dispatch a creating admin action
    } else if (action === EDIT_ADMIN) {
      // trigger an updating admin action
    }
    setTimeout(() => {
      setLoading(false);
      // trigger a feedback
      // this would be triggered by a server response
      setIsProvidingFeedback(true);
    }, 3000);
  };

  // update permissions when updating role
  const handleRole = (e) => {
    const { value } = e.target;
    const foundType = EXPAY_ADMIN_TYPES.find((type) => type.title === value);
    if (foundType) {
      onPermissionChange([...foundType.permissions], value);
    }
  };

  return (
    <>
      <MuiModal open={isProvidingFeedback} onClose={closeAdminProcess}>
        <FeedbackModal
          title="Invitation Sent"
          content={`An invitation has been sent to ${activeItemDetails && activeItemDetails.email}`}
          onClose={closeAdminProcess}
          timeout={4000}
        />
      </MuiModal>
      <MuiBreadcrumbs>
        <HeadingSix
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          color={active ? theme.palette.primary.main : 'text.dashed'}
          style={{ cursor: 'pointer' }}
          onClick={reset}
        >
          {'Admin'}
        </HeadingSix>
        <HeadingSix color={'text.primary'}>{action}</HeadingSix>
      </MuiBreadcrumbs>
      <MuiBox
        width={1}
        component="form"
        sx={{
          paddingLeft: { xs: 0, sm: 0, md: 4, lg: 8, xl: 12 },
          '& .MuiTextField-root': { width: '100%' },
        }}
        validate
        autoComplete="off"
      >
        <Container isFullscreen={false} width={500} noBottomPadding smallwidth={320}>
          <MuiBox marginTop={3}>
            <HeadingFive>{'First Name'}</HeadingFive>
            <MuiTextInputField
              size="small"
              type="text"
              placeholder={'John'}
              label=""
              fullWidth
              name={'firstName'}
              onChange={handleUpdate}
              value={`${activeItemDetails.firstName}`}
            />
          </MuiBox>
          <MuiBox marginTop={3}>
            <HeadingFive>{'Last Name'}</HeadingFive>
            <MuiTextInputField
              size="small"
              type="text"
              placeholder={'Doe'}
              label=""
              fullWidth
              name={'lastName'}
              onChange={handleUpdate}
              value={`${activeItemDetails.lastName}`}
            />
          </MuiBox>
          <MuiBox marginTop={3}>
            <HeadingFive>{'Email'}</HeadingFive>
            <MuiTextInputField
              size="small"
              type="text"
              placeholder={'Enter email'}
              label=""
              fullWidth
              name={'email'}
              onChange={handleUpdate}
              value={`${activeItemDetails.email}`}
            />
          </MuiBox>
          <MuiBox marginY={3}>
            <HeadingFive>{'Select Role'}</HeadingFive>
            <StyledSelect
              label={'Role'}
              selections={roles}
              value={activeItemDetails.title}
              name={'title'}
              onChange={handleRole}
              placeholder={'Select a role'}
            />
          </MuiBox>
          <Permissions activeItemDetails={activeItemDetails} handlePermits={handlePermits} />
          <MuiBox
            display="flex"
            flexDirection={{ xs: 'column', sm: 'row' }}
            alignItems={'center'}
            justifyContent={'space-between'}
            sx={{ gap: '10px' }}
            marginTop={3}
          >
            <MuiBox width={'100%'}>
              <OutlinedButton fullWidth onClick={closeAdminProcess}>
                Cancel
              </OutlinedButton>
            </MuiBox>
            <MuiBox width={'100%'}>
              <PrimaryButton fullWidth loadingButton loading={loading} onClick={handleSave}>
                Save
              </PrimaryButton>
            </MuiBox>
          </MuiBox>
        </Container>
      </MuiBox>
    </>
  );
}
CreateAdmin.propTYpe = {
  activeItemDetails: PropTypes.object,
};
