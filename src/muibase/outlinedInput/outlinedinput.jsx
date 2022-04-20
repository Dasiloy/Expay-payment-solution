import React from 'react';
import PropTypes from 'prop-types';
import OutlinedInput from '@mui/material/OutlinedInput';

const MuiOutlinedInput = ({
  value,
  onChange,
  placeholder,
  size,
  startAdornment,
  children,
  icon,
  position,
  endAdornment,
  ...rest
}) => {
  return (
    <OutlinedInput
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      size={size}
      startAdornment={startAdornment}
      endAdornment={endAdornment}
      {...rest}
    >
      {children}
    </OutlinedInput>
  );
};

MuiOutlinedInput.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.any,
  size: PropTypes.string,
  startAdornment: PropTypes.node,
  endAdornment: PropTypes.node,
};

export default MuiOutlinedInput;
