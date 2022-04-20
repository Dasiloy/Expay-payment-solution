import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBox } from 'muibase';
import { RESSOLVED, PENDING, UNRESOLVED } from 'constants/EXPAY_DATA';

export default function DotLabel({ status = UNRESOLVED, ...other }) {
  const theme = useTheme();
  if (status === RESSOLVED) {
    return (
      <MuiBox
        {...other}
        style={{
          height: 12,
          minWidth: 12,
          lineHeight: 0,
          cursor: 'default',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          backgroundColor: theme.palette.success.main,
          borderRadius: '50%',
        }}
      />
    );
  }
  if (status === PENDING) {
    return (
      <MuiBox
        {...other}
        style={{
          height: 12,
          minWidth: 12,
          lineHeight: 0,
          cursor: 'default',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          backgroundColor: theme.palette.warning.main,
          borderRadius: '50%',
        }}
      />
    );
  }
  if (status === UNRESOLVED) {
    return (
      <MuiBox
        {...other}
        style={{
          height: 12,
          minWidth: 12,
          lineHeight: 0,
          cursor: 'default',
          alignItems: 'center',
          whiteSpace: 'nowrap',
          display: 'inline-flex',
          justifyContent: 'center',
          backgroundColor: theme.palette.error.main,
          borderRadius: '50%',
        }}
      />
    );
  }
  return (
    <MuiBox
      {...other}
      style={{
        height: 12,
        minWidth: 12,
        lineHeight: 0,
        cursor: 'default',
        alignItems: 'center',
        whiteSpace: 'nowrap',
        display: 'inline-flex',
        justifyContent: 'center',
        backgroundColor: theme.palette.grey[300],
        borderRadius: '50%',
      }}
    />
  );
}

DotLabel.propTypes = {
  status: PropTypes.oneOf([RESSOLVED, PENDING, UNRESOLVED]),
};
