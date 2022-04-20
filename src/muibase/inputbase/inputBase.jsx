import React from 'react';
import PropTypes from 'prop-types';
import InputBase from '@mui/material/InputBase';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FilledInput from '@mui/material/FilledInput';

export default function MuiInputBase({
  sx,
  placeholder,
  value,
  onChange,
  inputProps,
  children,
  inputComponent,
  ...rest
}) {
  return (
    <InputBase
      value={value}
      onChange={onChange}
      sx={sx}
      placeholder={placeholder}
      inputProps={inputProps}
      {...rest}
    >
      {children}
    </InputBase>
  );
}

MuiInputBase.propType = {
  sx: PropTypes.object,
  placeholder: PropTypes.string,
  inputProps: PropTypes.object,
  inputComponent: PropTypes.any,
  value: PropTypes.any,
  onChange: PropTypes.func,
  rest: PropTypes.object,
};

MuiInputBase.Input = Input;
MuiInputBase.Label = InputLabel;
MuiInputBase.FilledInput = FilledInput;
