import React from 'react';
import PropTypes from 'prop-types';
import  Badge  from '@mui/material/Badge';

export default function MuiBadge ({color, badgeContent, children, ...others}) {
  return (
    <Badge badgeContent={badgeContent} color={color} {...others}>
      {children}
    </Badge>
  );
}
