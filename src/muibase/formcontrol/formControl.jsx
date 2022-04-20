import React from 'react';
import PropTypes from 'prop-types';
import FormControl from '@mui/material/FormControl';
import { FormControlLabel } from '@mui/material';

export default function MuiFormControl({ children, ...rest }) {
  return <FormControl {...rest}>{children}</FormControl>;
}

MuiFormControl.propType = {
  children: PropTypes.node,
};

MuiFormControl.Label = FormControlLabel;
