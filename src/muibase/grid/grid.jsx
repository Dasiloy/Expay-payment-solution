import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';

function MuiGrid ({item, container, spacing, justifyContent, alignItems, children, ...rest}) {
  return (
    <Grid
      item={item}
      container={container}
      spacing={spacing}
      justifyContent={justifyContent}
      alignItems={alignItems}
      {...rest}>
      {children}
    </Grid>
  );
}

export default MuiGrid;

Grid.propTypes = {
  container:PropTypes.bool,
  item:PropTypes.bool,
  spacing:PropTypes.any,
  justifyContent:PropTypes.string,
  alignItems:PropTypes.string,
  children:PropTypes.node,
  rest:PropTypes.object,
};
