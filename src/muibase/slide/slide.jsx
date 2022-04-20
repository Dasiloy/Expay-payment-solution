import React from 'react';
import PropTypes from 'prop-types';
import Slide from '@mui/material/Slide';

function MuiSlide({
  direction = '',
  transitionIn = false,
  onmountOnExit = true,
  mountOnEnter = true,
  children,
  ...rest
}) {
  return (
    <Slide
      direction={direction}
      in={transitionIn}
      mountOnEnter={mountOnEnter}
      unmountOnExit={onmountOnExit}
      {...rest}
    >
      {children}
    </Slide>
  );
}

MuiSlide.propTypes = {
  direction: PropTypes.string,
  transitionIn: PropTypes.bool,
  onmountOnExit: PropTypes.bool,
  mountOnEnter: PropTypes.bool,
  children: PropTypes.node,
};

export default MuiSlide;
