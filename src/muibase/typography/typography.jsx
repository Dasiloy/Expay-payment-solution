import React from 'react';
import PropTypes from 'prop-types';
import  Typography  from '@mui/material/Typography';

export default  function MuiTypography ({gutterBottom, variant, ...rest}) {
  return (
    <Typography gutterBottom={gutterBottom} variant={variant} {...rest}/>
  );
}
MuiTypography.propTypes = {
  gutterBottom:PropTypes.bool,
  variant:PropTypes.string,
  rest:PropTypes.object,
};
