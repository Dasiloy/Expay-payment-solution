import React from 'react';
import PropTypes from 'prop-types';
import  IconButton  from '@mui/material/IconButton';
function MuiIconButton({children, color, ...rest}) {
  return (
    <IconButton color={color} {...rest}>
      {children}
    </IconButton>
  );
}

export default MuiIconButton;

MuiIconButton.propType  = {
  children:PropTypes.node,
  color:PropTypes.string,
  rest:PropTypes.object,
};
