import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Iconify } from 'components';
import { HeadingFive, HeadingFour, SubBody } from 'styled';
import { MuiBox, MuiStack, MuiIconButton } from 'muibase';

export default function StatCard({ stat = {} }) {
  const isMd = useMediaQuery(useTheme().breakpoints.up('md'), {
    defaultMatches: true,
  });
  const theme = useTheme();
  return (
    <MuiBox
      bgcolor={
        theme.palette.mode === 'light'
          ? theme.palette.background.default
          : theme.palette.background.level2
      }
      sx={{
        display: 'flex',
        flexDirection: isMd ? 'row' : 'column',
        alignItems: 'center',
        padding: isMd ? theme.spacing(3, 4) : theme.spacing(4, 2),
        boxShadow: theme.shadows[1],
        borderRadius: '10px',
        gap: theme.spacing(isMd ? 3 : 1),
      }}
    >
      <MuiIconButton color={'primary'} size="small">
        <Iconify icon={stat.icon} width={isMd ? '35px' : '40px'} height={isMd ? '35px' : '40px'} />
      </MuiIconButton>
      <MuiStack direction="column" spacing={0}>
        <HeadingFour textAlign={isMd ? 'left' : 'center'}>{stat.value}</HeadingFour>
        <SubBody
          fontSize={'15px !important'}
          color={'text.dashed'}
          textAlign={isMd ? 'left' : 'center'}
        >
          {stat.title}
        </SubBody>
      </MuiStack>
    </MuiBox>
  );
}
StatCard.propTypes = {
  stat: PropTypes.object.isRequired,
};
