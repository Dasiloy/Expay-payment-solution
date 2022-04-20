import React from 'react';
import { MuiDrawer, MuiBox } from 'muibase';
import  SidebarNav from'./SidebarNav';

function Sidebar({links = [], open, variant, onClose}) {
  return (
    <MuiDrawer open={open} variant={variant} onClose={onClose} anchor={'left'}>
      <MuiBox
        sx={{
          height: '100%',
          padding: 1,
        }}
      >
        <SidebarNav links={links} onClose={onClose} />
      </MuiBox>
    </MuiDrawer>
  );
}

export default Sidebar;
