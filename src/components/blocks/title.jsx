import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import { SubBody } from 'styled';
export default function Title ({title = ''}) {
  const theme = useTheme();
  return (
    <span style={{
      borderRadius:'6px',
      display:'inline-block',
      padding:'8px 14px',
      color: theme.palette.mode === 'light' ? '#2F364A' : '#000',
      background:theme.palette.secondary.main,
      boxShadow:theme.shadows[1],
    }}
    >
      <SubBody sx={{ fontWeight:600 }} color={theme.palette.mode === 'light' ? 'text.primary' : '#fff'}>
        {title}
      </SubBody>
    </span>
  );
}
Title.propType = {
  title:PropTypes.string.isRequired,
};
