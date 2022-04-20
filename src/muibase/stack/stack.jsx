import React from 'react';
import PropTypes from 'prop-types';
import Stack from '@mui/material/Stack';

function MuiStack({direction, spacing, children, alignItems, justifyContent, ...rest}) {
  return (
    <Stack direction={direction} spacing={spacing} alignItems={alignItems} justifyContent={justifyContent} {...rest}>
      {children}
    </Stack>
  );
}

export default MuiStack;

MuiStack.propType = {
  direction:PropTypes.string,
  spacing:PropTypes.number,
  justifyContent:PropTypes.string,
  alignItems:PropTypes.string,
  children:PropTypes.node,
  rest:PropTypes.object,
};
