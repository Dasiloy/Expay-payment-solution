import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiIconButton, MuiBox, MuiStack, MuiAvatar, MuiSwitch, MuiFormControl } from 'muibase';
import { HeadingSix, RootAppBar, RootToolbar } from 'styled';
import { ThemeToggler, Iconify } from 'components';
import Searchbox from './seacrbar';
import Notificationspopover from './notificationsPopOver';
import AccountPopover from './profilePopOver';
import CurrencyPopover from './currencypopOver';

// import notifications list
import { Notifications } from 'constants';

function TopBar({ openSidebar = () => {}, isAdmin = false, user = {} }) {
  // theme
  const theme = useTheme();

  // formControl Label
  const { Label } = MuiFormControl;

  // admin topbar
  const Admin = () => (
    <RootToolbar>
      <MuiIconButton
        onClick={openSidebar}
        sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </MuiIconButton>
      <Searchbox />
      <MuiBox sx={{ flexGrow: 1 }} />
      <MuiStack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 2 }}>
        <ThemeToggler />
        <Notificationspopover notificationsList={Notifications} />
        <AccountPopover user={user} isAdmin={isAdmin} />
      </MuiStack>
    </RootToolbar>
  );

  // merchant topbar
  const Merchant = () => (
    <RootToolbar>
      <MuiIconButton
        onClick={openSidebar}
        sx={{ mr: 1, color: 'text.primary', display: { lg: 'none' } }}
      >
        <Iconify icon="eva:menu-2-fill" />
      </MuiIconButton>
      <Searchbox />
      <MuiBox sx={{ flexGrow: 1 }} />
      <MuiStack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
        <ThemeToggler />
        <Label
          labelPlacement="start"
          control={<MuiSwitch defaultChecked />}
          label={<HeadingSix color="text.primary">Test Mode</HeadingSix>}
          size="small"
        />
        <MuiIconButton>
          <Iconify
            icon="carbon:help-filled"
            sx={{
              width: '20px',
              height: '20px',
            }}
          />
        </MuiIconButton>
        <Notificationspopover notificationsList={Notifications} />
        <MuiStack direction="row" alignItems="center" spacing={{ xs: 2.5 }}>
          <CurrencyPopover />
          <AccountPopover user={user} />
        </MuiStack>
      </MuiStack>
    </RootToolbar>
  );
  if (isAdmin) {
    return (
      <RootAppBar
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
        elevation={1}
      >
        <Admin />
      </RootAppBar>
    );
  }
  return (
    <RootAppBar
      sx={{
        backgroundColor: theme.palette.background.paper,
      }}
      elevation={1}
    >
      <Merchant />
    </RootAppBar>
  );
}

export default TopBar;
TopBar.propTypes = {
  openSidebar: PropTypes.func,
  isAdmin: PropTypes.bool,
  user: PropTypes.object.isRequired,
};
