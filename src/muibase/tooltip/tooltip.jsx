import React from 'react';
import PropTypes from 'prop-types';
import  Tooltip  from '@mui/material/Tooltip';

const MuiTooltip = ({title, children, ...rest}) => {
  return (
    <Tooltip title={title} {...rest}>
      {children}
    </Tooltip>
  );
};

MuiTooltip.propTypes = {
  title:PropTypes.string,
  children:PropTypes.node,
};

export default MuiTooltip;
