import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';

function MuiPopover({ anchorOrigin, transformOrigin, PaperProps, children, ...others }) {
  return (
    <Popover
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      PaperProps={PaperProps}
      {...others}
    >
      {children}
    </Popover>
  );
}

MuiPopover.propTypes = {
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
  PaperProps: PropTypes.any,
  children: PropTypes.node,
};

export default MuiPopover;
