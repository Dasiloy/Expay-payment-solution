import Box from '@mui/material/Box';
import PropTypes from 'prop-types';

export default function MuiBox ({children, ...rest}) {
  return (
    <Box
      {...rest}
    >
      {children}
    </Box>
  );
}

Box.propTypes = {
  children: PropTypes.node,
  rest:PropTypes.object,
};
