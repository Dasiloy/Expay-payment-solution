import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox } from 'muibase';

export default function ShadowContainer({ children, isFullBlown, noPadding, ...rest }) {
  const theme = useTheme();
  if (isFullBlown) {
    return (
      <MuiBox
        paddingTop={0}
        sx={{
          boxShadow: theme.shadows[1],
          background:
            theme.palette.mode === 'light'
              ? theme.palette.background.paper
              : theme.palette.background.level2,
        }}
        {...rest}
      >
        {children}
      </MuiBox>
    );
  }
  return (
    <MuiBox
      paddingY={noPadding ? 0 : 2}
      sx={{
        boxShadow: theme.shadows[1],
        background:
          theme.palette.mode === 'light'
            ? theme.palette.background.paper
            : theme.palette.background.level2,
      }}
      {...rest}
    >
      {children}
    </MuiBox>
  );
}

ShadowContainer.propType = {
  children: PropTypes.node.isRequired,
  isFullBlown: PropTypes.bool,
  noPadding: PropTypes.bool,
};
