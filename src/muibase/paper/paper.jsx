import Paper from '@mui/material/Paper';
import PropTypes from 'prop-types';

export default function MuiPaper ({elevation, children, ...rest}) {
  return <Paper elevation={elevation} {...rest}>
    {children}
  </Paper>;
}

MuiPaper.propTypes = {
  elevation:PropTypes.number,
  children:PropTypes.node.isRequired,
};
