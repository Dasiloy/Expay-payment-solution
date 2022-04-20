import React from 'react';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiDivider } from 'muibase';
import { HeadingFive, HeadingSix, SubBody, TextButton } from 'styled';

export default function ActivityLogList({ loglist = [] }) {
  const theme = useTheme();
  return (
    <MuiBox>
      {loglist.length > 0 &&
        loglist
          .slice(0, 3)
          .map((log, index) => <ActivityLog key={index} activity={log} index={index} />)}
      {loglist.length > 0 && <TextButton fullWidth>See all</TextButton>}
    </MuiBox>
  );
}

const ActivityLog = ({ activity, index }) => {
  const theme = useTheme();
  return (
    <MuiBox
      sx={{
        paddingY: 3,
        borderBottom: index !== 2 ? '1px solid' : '',
        borderColor: theme.palette.divider,
      }}
    >
      <MuiBox display="flex" alignItems="center" justifyContent={'space-between'}>
        <SubBody>{`${activity.user.firstName}. ${
          activity.user.lastName ? activity.user.lastName.charAt(0) : ''
        }`}</SubBody>
        <HeadingSix>{activity.user.lastLoggedIn}</HeadingSix>
      </MuiBox>
      <HeadingFive style={{fontWeight:500}}>{activity.activity}</HeadingFive>
    </MuiBox>
  );
};
