import React from 'react';
import PropTypes from 'prop-types';
import  Toolbar  from '@mui/material/Toolbar';

export default function MuiToolBar ({ className, classes, sx, disableGutters, component, variant, children, ...rest} ) {
  return (
    <Toolbar sx={sx} classes={classes} className={className} disableGutters={disableGutters} component={component} variant={variant} {...rest}>
      {children}
    </Toolbar>
  );
}

MuiToolBar.propType = {
  className:PropTypes.any,
  classes:PropTypes.object,
  disableGutters:PropTypes.bool,
  component:PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  variant:PropTypes.string,
  children:PropTypes.node,
  rest:PropTypes.object,
};
