import React from 'react';
import PropTypes from 'prop-types';
import  Checkbox  from '@mui/material/Checkbox';

const MuiCheckbox = ({checked, indeterminate, onChange, ...rest}) => {
  return (
    <Checkbox checked={checked} onChange={onChange} indeterminate={indeterminate} {...rest}/>
  );
};

MuiCheckbox.propTypes = {
  checked:PropTypes.bool,
  indeterminate:PropTypes.bool,
  onChange:PropTypes.func,
};

export default MuiCheckbox;
