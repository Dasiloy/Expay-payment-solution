import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox, MuiGrid } from 'muibase';
import { HeadingFour, HeadingSix } from 'styled';

export default function Widget({
  title = '',
  value = '' || 0,
  color = '',
  index = 0,
  withDollar = false,
}) {
  const theme = useTheme();
  return (
    <MuiGrid
      item
      xs={6}
      md={3}
      justifyContent={'center'}
      sx={{ marginBottom: { xs: index < 2 && 2, md: 0 } }}
    >
      <MuiBox
        alignItems={'center'}
        paddingLeft={3}
        sx={{
          borderLeft: index > 0 ? '1px solid' : '',
          borderColor: theme.palette.divider,
          borderRadius: '8px',
        }}
      >
        <HeadingSix style={{ color: color ? color : 'text.dashed' }}>{title}</HeadingSix>
        <HeadingFour>{withDollar ? `$${value}` : value}</HeadingFour>
      </MuiBox>
    </MuiGrid>
  );
}

Widget.propType = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  withDollar: PropTypes.bool,
};
