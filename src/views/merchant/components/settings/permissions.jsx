import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiStack, MuiCheckbox } from 'muibase';
import { HeadingSix } from 'styled';

// import merchant admins permissions
import {
  permissions,
  HELP_AND_SUPPORT,
  MANAGE_SUBSCRIPTIONS,
  VIEW_TRANSACTION_HISTORY,
  VIEW_VENDORS,
  WITHDRAWALS,
} from 'constants';

function Permissions({ activeItemDetails = {}, handlePermits = () => {} }) {
  const theme = useTheme();

  // default permissions state
  const newPermissions = {
    [HELP_AND_SUPPORT]: false,
    [MANAGE_SUBSCRIPTIONS]: false,
    [VIEW_TRANSACTION_HISTORY]: false,
    [VIEW_VENDORS]: false,
    [WITHDRAWALS]: false,
  };

  // update permissions if we are editing an admin
  if (activeItemDetails.permissions) {
    const { permissions: ownPermissions } = activeItemDetails;
    ownPermissions.forEach((item) => (newPermissions[item] = Boolean(item)));
  }
  const [_permissions, setPermissions] = React.useState({
    ...newPermissions,
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
  };

  React.useEffect(() => {
    handlePermits(_permissions);
  }, [_permissions]);

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
        {permissions.length > 0 &&
          permissions.map((permission) => (
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
