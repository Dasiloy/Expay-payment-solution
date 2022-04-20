import React from 'react';
import PropTypes from 'prop-types';
import { formatDistanceToNow } from 'date-fns';
import { MuiList, MuiAvatar, MuiTypography } from 'muibase';
import { Iconify } from 'components';

//  rendercontent {takes a notication object and returns a jsx of its title,description and image as key value pairs}
import RenderContent from './renderContent';

function NotificationItem({ notification = {} }) {
  const { Button, Avatar, Text } = MuiList;
  const { avatar, title } = RenderContent(notification);

  return (
    <Button
      disableGutters
      sx={{
        py: 1,
        px: 2.5,
      }}
    >
      <Avatar>
        <MuiAvatar sx={{ bgcolor: 'primary.main' }}>{avatar}</MuiAvatar>
      </Avatar>
      <Text
        primary={title}
        secondary={
          <MuiTypography
            variant="caption"
            gutterBottom={false}
            sx={{
              mt: 0.5,
              display: 'flex',
              alignItems: 'center',
              color: '',
            }}
          >
            <Iconify icon="eva:clock-fill" sx={{ mr: 0.5, width: 16, height: 16 }} />
            {formatDistanceToNow(new Date(notification.createdAt))}
          </MuiTypography>
        }
      />
    </Button>
  );
}

NotificationItem.propTypes = {
  notification: PropTypes.object,
};

export default NotificationItem;
