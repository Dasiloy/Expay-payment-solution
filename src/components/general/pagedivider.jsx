import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox, MuiDivider } from 'muibase';
function PageDivider({ margin = 3 }) {
  return (
    <MuiBox marginY={margin || 3}>
      <MuiDivider />
    </MuiBox>
  );
}

export default PageDivider;

PageDivider.propType = {
  margin: PropTypes.number,
};
