import * as React from 'react';
import PropTypes from 'prop-types';
import Select from '@mui/material/Select';

export default function MuiSelect({
  disableUnderline = true,
  children,
  value = 0 || '',
  onChange = () => {},
  ...rest
}) {
  return (
    <Select
      disableUnderline={disableUnderline}
      labelId="demo-simple-select-filled-label"
      id="demo-simple-select-filled"
      value={value}
      onChange={onChange}
      {...rest}
    >
      {children}
    </Select>
  );
}

MuiSelect.propType = {
  disableUnderline: PropTypes.bool,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
