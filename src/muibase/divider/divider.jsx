import React from 'react';
import PropTypes from 'prop-types';
import  Divider  from '@mui/material/Divider';

export default function MuiDivider ({variant, textAlign, sx, orientation, light, children, ...rest}) {
  return (
    <Divider
      variant={variant}
      textAlign={textAlign}
      sx={sx}
      orientation={orientation}
      light={light}
      children={children}
      {...rest}/>
  );
}

MuiDivider.propType = {
  variant:PropTypes.string,
  textAlign:PropTypes.string,
  sx:PropTypes.any,
  orientation:PropTypes.string,
  light:PropTypes.bool,
  children:PropTypes.node,
  rest:PropTypes.object,
};
