import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiStack, MuiAvatar } from 'muibase';
import PropTypes from 'prop-types';
import { HeadingSix } from 'styled';
import { Iconify } from 'components';

function Singleadmincard({
  user = {},
  openDialog = () => {},
  openUpdatesAdmin = () => {},
  isPreview = false,
}) {
  const theme = useTheme();

  return (
    <MuiBox
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
      marginBottom={2}
      paddingX={3}
      paddingY={2}
      sx={{
        border: '1px solid',
        borderColor: theme.palette.divider,
        borderRadius: '6px',
        width: '100%',
      }}
    >
      <MuiStack direction="row" spacing={3} alignItems={'center'}>
        <MuiAvatar alt={user.firstName} src={user.avatarUrl} />
        <MuiBox textAlign={'left'}>
          <HeadingSix>{`${user.firstName} ${user.lastName}`}</HeadingSix>
          <HeadingSix color="text.dashed" style={{ fontSize: '0.80rem' }}>
            {user.title}
          </HeadingSix>
        </MuiBox>
      </MuiStack>
      {!isPreview && (
        <MuiStack direction="row" spacing={1} alignItems={'center'}>
          <Iconify
            icon={'ant-design:edit-filled'}
            width={18}
            height={18}
            onClick={(e) => openUpdatesAdmin(e, user)}
            sx={{ color: `${theme.palette.primary.main}`, cursor: 'pointer' }}
          />
          <Iconify
            icon={'ant-design:delete-filled'}
            color={'primary'}
            width={18}
            height={18}
            onClick={() => openDialog(user)}
            sx={{ color: `${theme.palette.error.main}`, cursor: 'pointer' }}
          />
        </MuiStack>
      )}
    </MuiBox>
  );
}

Singleadmincard.propTypes = {
  user: PropTypes.object,
  isPreview: PropTypes.bool,
};

export default Singleadmincard;
