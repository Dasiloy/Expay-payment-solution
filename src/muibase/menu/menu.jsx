import React from 'react';
import PropTypes from 'prop-types';
import MenuList from '@mui/material/MenuList';
import Menu from '@mui/material/Menu';
import  MenuItem  from '@mui/material/MenuItem';

function MuiMenu({isOpen, anchorEl, onClose, PaperProps, anchorOrigin, transformOrigin, children, ...rest}) {
  return (
    <Menu
      open={isOpen}
      anchorEl={anchorEl}
      onClose={onClose}
      PaperProps={{
        ...PaperProps,
      }}
      anchorOrigin={{...anchorOrigin}}
      transformOrigin={{...transformOrigin}}
      {...rest}
    >
      {children}
    </Menu>
  );
}

MuiMenu.propTypes = {
  isOpen:PropTypes.bool,
  anchorEl:PropTypes.any,
  onClose:PropTypes.func,
  PaperProps:PropTypes.object,
  anchorOrigin:PropTypes.object,
  transformOrigin:PropTypes.object,
  children:PropTypes.node,
};

export default MuiMenu;

MuiMenu.List = MenuList;
MuiMenu.Item = MenuItem;
