import React from 'react';
import PropTypes from 'prop-types';
import { MuiList, MuiBadge, MuiIconButton, MuiBox, MuiToolTip, MuiDivider } from 'muibase';
import { MenuPopover } from 'components';
import { Iconify } from 'components';
import { SubBody, SubTitle2, TextButton } from 'styled';
import Scrollbar from '../sidebar/scrollbar';
import NotificationItem from './notificationitem';

const Notificationspopover = ({ notificationsList = [] }) => {
  const { SubHeader } = MuiList;
  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const [totalUnRead, setTotalUnread] = React.useState(0);

  const handleOpen = (event) => {
    // open menu
    setOpen(event.currentTarget);
  };

  // close menu
  const handleClose = () => {
    setOpen(null);
  };

  // clear notifications
  const handleMarkAllAsRead = () => {
    const modified = notifications.map((notification) => ({
      ...notification,
      isUnRead: false,
    }));
    setNotifications([]);
    setTotalUnread(modified.filter((item) => item.isUnRead).length);
    handleClose();
  };

  React.useEffect(() => {
    const unRead = notificationsList.filter((item) => item.isUnRead === true).length;
    setNotifications(notificationsList);
    setTotalUnread(unRead);
  }, []);
  return (
    <>
      <MuiIconButton size="large" color={open ? 'primary' : 'default'} onClick={handleOpen}>
        <MuiBadge badgeContent={totalUnRead} color="primary">
          <Iconify icon="eva:bell-fill" width={20} height={25} />
        </MuiBadge>
      </MuiIconButton>
      <MenuPopover open={Boolean(open)} onClose={handleClose} anchorEl={open} sx={{ width: 360 }}>
        <MuiBox sx={{ display: 'flex', alignItems: 'center', py: 2, px: 2.5 }}>
          <MuiBox sx={{ flexGrow: 1 }}>
            <SubTitle2>Notifications</SubTitle2>
            <SubBody sx={{ color: 'text.secondary', fontSize: '14px !important' }}>
              You have {totalUnRead} unread messages
            </SubBody>
          </MuiBox>

          {totalUnRead > 0 && (
            <MuiToolTip title=" Mark all as read">
              <MuiIconButton onClick={handleMarkAllAsRead} color="success">
                <Iconify icon="eva:done-all-fill" width={20} height={20} />
              </MuiIconButton>
            </MuiToolTip>
          )}
        </MuiBox>
        <MuiDivider />
        <Scrollbar sx={{ maxHeight: '75vh' }}>
          <MuiList
            disablePadding
            subheader={
              <SubHeader disableSticky sx={{ py: 0.5, px: 2.5, typography: 'overline' }}>
                New
              </SubHeader>
            }
          >
            {notifications.map((notification) => (
              <NotificationItem key={notification.id} notification={notification} />
            ))}
            {notifications.length === 0 && (
              <SubBody sx={{ mx: 2.5, fontSize: '14px !important' }}>
                You have no new notification
              </SubBody>
            )}
          </MuiList>
          {/* {notifications.length !== 0 && <MuiDivider />} */}
          {/* <MuiBox sx={{ paddingY: 1 }}>
            {notifications.length !== 0 && <TextButton fullWidth>See All</TextButton>}
          </MuiBox> */}
          <MuiBox sx={{ paddingBottom: 2 }} />
        </Scrollbar>
      </MenuPopover>
    </>
  );
};

Notificationspopover.propTypes = {
  notificationsList: PropTypes.array,
};

export default Notificationspopover;
