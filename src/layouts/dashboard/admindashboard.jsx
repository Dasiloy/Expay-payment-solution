import React from 'react';
import PropTypes from 'prop-types';
import { TopBar, SideBar, Body } from './components';
import { DashBoardMainLayout, DashBoardMainLayoutContent } from 'styled';
import { adminSidebarLinks } from './components/sidebar/sidebarData';
import { adminUser as user } from 'constants';

function AdminDashboardLayout({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const onCloseSidebar = () => setIsOpenSidebar(false);
  const openSidebar = () => setIsOpenSidebar(true);
  return (
    <DashBoardMainLayout>
      <TopBar openSidebar={openSidebar} user={user} isAdmin />
      <SideBar
        isOpenSidebar={isOpenSidebar}
        onCloseSidebar={onCloseSidebar}
        routes={adminSidebarLinks}
        isAdmin
      />
      <DashBoardMainLayoutContent>
        <Body>{children}</Body>
      </DashBoardMainLayoutContent>
    </DashBoardMainLayout>
  );
}

export default AdminDashboardLayout;

AdminDashboardLayout.propType = {
  children: PropTypes.node,
};
