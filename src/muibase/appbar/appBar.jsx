import React from 'react';
import PropTypes from 'prop-types';
import AppBar  from '@mui/material/AppBar';

function MuiAppBar ({ position, sx, elevation, children, ...rest}) {
  return (
    <AppBar
      position={position}
      sx={sx}
      elevation={elevation}
      {...rest}
    >
      {children}
    </AppBar>
  );
}

export default MuiAppBar;

MuiAppBar.propTypes = {
  sx:PropTypes.object,
  rest:PropTypes.object,
  elevation:PropTypes.number,
  position:PropTypes.string,
  children:PropTypes.node,
};
