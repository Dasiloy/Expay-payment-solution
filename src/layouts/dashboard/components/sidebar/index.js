import React from 'react';
import propTypes from 'prop-types';
import { MuiDrawer, MuiBox } from 'muibase';
import { RootSideBar } from 'styled';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Logo } from 'components';
import { DRAWER_WIDTH } from 'styled/dashboard/constants';
import Scrollbar from './scrollbar';
import SideBarNav from './sideBarList';

// drawer for mobile screens
function MobileDrawer({ children, isOpenSidebar, onCloseSidebar, isAdmin, routes }) {
  return (
    <MuiDrawer
      open={isOpenSidebar}
      onClose={onCloseSidebar}
      PaperProps={{
        sx: { width: DRAWER_WIDTH },
      }}
    >
      {children}
    </MuiDrawer>
  );
}

// drawer for desktop screen
function DeskTopDrawer({ children }) {
  return (
    <MuiDrawer
      open
      variant="persistent"
      PaperProps={{
        sx: {
          width: `${DRAWER_WIDTH}px !important`,
          bgcolor: 'background.default',
          borderRightStyle: 'normal',
        },
      }}
    >
      {children}
    </MuiDrawer>
  );
}

function Sidebar({
  isOpenSidebar = false,
  onCloseSidebar = () => {},
  merchantExtra = [],
  routes = [],
  isAdmin = false,
}) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });
  return (
    <RootSideBar>
      {isDesktop ? (
        <DeskTopDrawer style={{ boxShadow: 'none !important' }}>
          <Scrollbar
            sx={{
              height: 1,
              '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
          >
            <MuiBox marginBottom={3} sx={{ px: 3, pt: 4, pb: 3.2, display: 'inline-flex' }}>
              <Logo height={0.8} width={0.8} />
            </MuiBox>
            <SideBarNav links={routes} merchantExtra={merchantExtra} isAdmin={isAdmin} />
          </Scrollbar>
        </DeskTopDrawer>
      ) : (
        <MobileDrawer isOpenSidebar={isOpenSidebar} onCloseSidebar={onCloseSidebar}>
          <Scrollbar
            sx={{
              height: 1,
              '& .simplebar-content': { height: 1, display: 'flex', flexDirection: 'column' },
            }}
          >
            <MuiBox sx={{ px: 3, pt: 4, pb: 3.2, display: 'inline-flex' }}>
              <Logo height={0.8} width={0.8} />
            </MuiBox>
            <SideBarNav links={routes} merchantExtra={merchantExtra} isAdmin={isAdmin} />
          </Scrollbar>
        </MobileDrawer>
      )}
    </RootSideBar>
  );
}

export default Sidebar;
Sidebar.propType = {
  isOpenSidebar: propTypes.bool.isRequired,
  onCloseSidebar: propTypes.func.isRequired,
  merchantExtra: propTypes.array,
  routes: propTypes.array.isRequired,
  isAdmin: propTypes.bool,
};
