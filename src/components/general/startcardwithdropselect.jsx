import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Iconify } from 'components';
import { HeadingFour, SubBody } from 'styled';
import { MuiBox, MuiStack, MuiIconButton } from 'muibase';

export default function StatCardSelect({ stats = [], currentStat: current = '' }) {
  const theme = useTheme();
  const currentStat = stats.find((stat) => stat.title === current);
  const isMd = useMediaQuery(useTheme().breakpoints.up('md'), {
    defaultMatches: true,
  });
  if (currentStat) {
    const { title, icon, value } = currentStat;
    return (
      <MuiBox
        bgcolor={
          theme.palette.mode === 'light'
            ? theme.palette.background.default
            : theme.palette.background.level2
        }
        sx={{
          position: 'relative',
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
          <Iconify icon={icon} width={isMd ? '35px' : '40px'} height={isMd ? '35px' : '40px'} />
        </MuiIconButton>
        <MuiStack direction="column" spacing={0}>
          <HeadingFour textAlign={isMd ? 'left' : 'center'}>{value}</HeadingFour>
          <SubBody
            fontSize={'15px !important'}
            color={'text.dashed'}
            textAlign={isMd ? 'left' : 'center'}
          >
            {title}
          </SubBody>
        </MuiStack>
      </MuiBox>
    );
  }
  return null;
}
StatCardSelect.propTypes = {
  stats: PropTypes.array.isRequired,
};
