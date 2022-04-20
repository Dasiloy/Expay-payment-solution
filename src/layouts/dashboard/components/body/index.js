import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox } from 'muibase';
import { PagScroller } from 'components';

function Body({ children }) {
  return (
    <MuiBox sx={{ px: { xs: 1, sm: 2, md: 3, lg: 4 } }}>
      <PagScroller style={{ minHeight: '100%' }}>{children}</PagScroller>
    </MuiBox>
  );
}

export default Body;

Body.propType = {
  children: PropTypes.node,
};
