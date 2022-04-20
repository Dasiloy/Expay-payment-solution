import React from 'react';
import PropTypes from 'prop-types';
import ClickAwayListener from '@mui/material/ClickAwayListener';

function MuiClickaway({ onClickAway = () => {}, children }) {
  return <ClickAwayListener onClickAway={onClickAway}>{children}</ClickAwayListener>;
}

MuiClickaway.propTypes = {
  onClickAway: PropTypes.func,
};

export default MuiClickaway;
