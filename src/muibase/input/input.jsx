import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@mui/material/TextField';

function MuiInput({
  id,
  label,
  variant,
  required,
  defaultValue,
  disabled,
  type,
  autoComplete,
  error,
  helperText,
  value,
  onChange,
  endAdornment,
  startAdornment,
  InputProps,
  hiddenLabel,
  size,
  fullWidth,
  placeholder,
  name,
  children,
  ...rest
}) {
  return (
    <TextField
      id={id}
      size={size}
      name={name}
      type={type}
      error={error}
      value={value}
      label={label}
      variant={variant}
      required={required}
      onChange={onChange}
      disabled={disabled}
      fullWidth={fullWidth}
      helperText={helperText}
      InputProps={InputProps}
      hiddenLabel={hiddenLabel}
      placeholder={placeholder}
      endAdornment={endAdornment}
      defaultValue={defaultValue}
      autoComplete={autoComplete}
      startAdornment={startAdornment}
      {...rest}
    >
      {children}
    </TextField>
  );
}

export default MuiInput;

MuiInput.propType = {
  id: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.string,
  required: PropTypes.bool,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  autoComplete: PropTypes.any,
  error: PropTypes.bool,
  helperText: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  endAdornment: PropTypes.node,
  startAdornment: PropTypes.node,
  InputProps: PropTypes.object,
  hiddenLabel: PropTypes.bool,
  size: PropTypes.string,
  rest: PropTypes.obj,
  fullWidth: PropTypes.bool,
  placeholder: PropTypes.any,
  name: PropTypes.any,
  children: PropTypes.node,
};
