import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiStack, MuiCheckbox } from 'muibase';
import { HeadingSix } from 'styled';

// import merchant admins permissions
import {
  expayPermissions,
  EXPAY_MANAGE_ADMINS,
  EXPAY_MESSAGE_USERS,
  EXPAY_VIEW_FINANCES,
  EXPAY_MANAGE_CONTENT,
  EXPAY_VIEW_MERCHANTS,
  EXPAY_VIEW_VENDORS,
} from 'constants';

function Permissions({ activeItemDetails = {}, handlePermits = () => {} }) {
  const theme = useTheme();
  // default permissions state
  const [_permissions, setPermissions] = React.useState({
    [EXPAY_MANAGE_ADMINS]: false,
    [EXPAY_MANAGE_CONTENT]: false,
    [EXPAY_MESSAGE_USERS]: false,
    [EXPAY_VIEW_FINANCES]: false,
    [EXPAY_VIEW_MERCHANTS]: false,
    [EXPAY_VIEW_VENDORS]: false,
  });

  // update permissions checkbox
  const handleChecked = (event) => {
    const newPermits = {
      ..._permissions,
      [event.target.name]: event.target.checked,
    };
    setPermissions({
      ...newPermits,
    });
    handlePermits({ ...newPermits });
  };
  React.useEffect(() => {
    const newPermissions = {
      [EXPAY_MANAGE_ADMINS]: false,
      [EXPAY_MANAGE_CONTENT]: false,
      [EXPAY_MESSAGE_USERS]: false,
      [EXPAY_VIEW_FINANCES]: false,
      [EXPAY_VIEW_MERCHANTS]: false,
      [EXPAY_VIEW_VENDORS]: false,
    };

    // update permissions if we are editing an admin
    if (activeItemDetails.permissions) {
      const { permissions: ownPermissions } = activeItemDetails;
      ownPermissions.forEach((item) => (newPermissions[item] = Boolean(item)));
    }
    setPermissions(newPermissions);
  }, [activeItemDetails]);

  return (
    <MuiBox
      sx={{
        paddingX: { xs: 2 },
        paddingTop: 3,
        paddingBottom: 2,
        borderRadius: '10px 10px 10px 10px',
      }}
      bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : '#0a0a0a'}
    >
      <HeadingSix gutterBottom>Select Privileges</HeadingSix>
      <MuiStack direction={'column'} spacing={0}>
        {expayPermissions.length > 0 &&
          expayPermissions.map((permission) => (
            <MuiBox
              key={permission}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
            >
              <HeadingSix color="text.dashed" style={{ fontSize: '0.85rem' }}>
                {permission}
              </HeadingSix>
              <MuiCheckbox
                size={'small'}
                name={permission}
                checked={_permissions[permission]}
                onChange={handleChecked}
              />
            </MuiBox>
          ))}
      </MuiStack>
    </MuiBox>
  );
}

Permissions.propTypes = {};

export default Permissions;
