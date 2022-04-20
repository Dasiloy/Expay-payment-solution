import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox } from 'muibase';

const Container = ({
  children,
  isFullscreen,
  noTopPadding,
  noBottomPadding,
  smallwidth,
  ...rest
}) => {
  // for whole screens
  if (isFullscreen) {
    return (
      <MuiBox
        maxWidth={{ sm: 720, md: 1300 }}
        width={1}
        margin={'0 auto'}
        paddingX={{ xs: 4, sm: 6, md: 8 }}
        paddingBottom={{ xs: 4, sm: 6, md: 8 }}
        paddingTop={noTopPadding ? 0 : { xs: 4, sm: 6 }}
        {...rest}
      >
        {children}
      </MuiBox>
    );
  }

  // for min containers for one sided screens
  return (
    <MuiBox
      maxWidth={{ xs: smallwidth || 400, sm: rest.width || 400 }}
      width={1}
      margin={'0 auto'}
      paddingX={2}
      paddingBottom={noBottomPadding ? 0 : { xs: 4, sm: 6, md: 8 }}
      paddingTop={noTopPadding ? 0 : { xs: 4, sm: 6, md: 8 }}
      {...rest}
    >
      {children}
    </MuiBox>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
  rest: PropTypes.object,
  isFullscreen: PropTypes.bool,
  noTopPadding: PropTypes.bool,
  noBottomPadding: PropTypes.bool,
};

export default Container;
