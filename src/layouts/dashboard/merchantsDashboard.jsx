import React from 'react';
import PropTypes from 'prop-types';
import { TopBar, SideBar, Body } from './components';
import { DashBoardMainLayout, DashBoardMainLayoutContent } from 'styled';
import { merchantExtra, merchantSidebarLinks } from './components/sidebar/sidebarData';
import { merchantUser as user } from 'constants';
function MerchantDashboardLayout({ children }) {
  const [isOpenSidebar, setIsOpenSidebar] = React.useState(false);

  const onCloseSidebar = () => setIsOpenSidebar(false);
  const openSidebar = () => setIsOpenSidebar(true);
  return (
    <DashBoardMainLayout>
      <TopBar openSidebar={openSidebar} user={user} />
      <SideBar
        isOpenSidebar={isOpenSidebar}
        onCloseSidebar={onCloseSidebar}
        routes={merchantSidebarLinks}
        merchantExtra={merchantExtra}
      />
      <DashBoardMainLayoutContent>
        <Body>{children}</Body>
      </DashBoardMainLayoutContent>
    </DashBoardMainLayout>
  );
}

export default MerchantDashboardLayout;
MerchantDashboardLayout.propType = {
  children: PropTypes.node,
};
