import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@mui/material/Drawer';

export default function MuiDrawer ({anchor, onClose, open, variant, children, maxWidth, ...rest}) {
  return (
    <Drawer
      anchor={anchor}
      onClose={onClose}
      open={open}
      variant={variant}
      sx={{
        '& .MuiPaper-root': {
          width: '100%',
          maxWidth:maxWidth || 288,
        },
      }}
      {...rest}
    >
      {children}
    </Drawer>
  );
}

MuiDrawer.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string,
  anchor:PropTypes.string,
  children:PropTypes.node.isRequired,
  maxWidth:PropTypes.any,
  rest:PropTypes.object,
};
