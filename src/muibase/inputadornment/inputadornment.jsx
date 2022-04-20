import React from 'react';
import PropTypes from 'prop-types';
import  InputAdornment  from '@mui/material/InputAdornment';

export default function MuiInputAdornment ({position, children, ...rest}) {
  return (
    <InputAdornment position={position} {...rest} >
      {children}
    </InputAdornment>
  );
}

MuiInputAdornment.propType = {
  position:PropTypes.string,
  children:PropTypes.node,
};
