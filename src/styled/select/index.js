import React from 'react';
import PropTypes from 'prop-types';
import { MuiFormControl, MuiInputBase, MuiMenu, MuiSelect, MuiInput } from 'muibase';

export function StyledSmall({
  label = 'select',
  value = '',
  handleChange = () => {},
  selections = [],
}) {
  const { Item } = MuiMenu;
  return (
    <MuiInput
      size="small"
      label={label}
      sx={{ maxWidth: 200 }}
      select
      value={value}
      onChange={handleChange}
    >
      {selections.map((selection) => (
        <Item key={selection.value} value={selection.value}>
          {selection.label}
        </Item>
      ))}
    </MuiInput>
  );
}

export const StyledSelect = ({
  label = '',
  selections = [],
  value = 0 || '',
  size = 'small',
  fullWidth = true,
  variant = 'filled',
  onChange = () => {},
  ...rest
}) => {
  const { Label } = MuiInputBase;
  const { Item } = MuiMenu;
  return (
    <MuiFormControl variant={variant} fullWidth={fullWidth} size={size}>
      <Label id="demo-simple-select-filled-label"> {label ?? 'Withdrawal method'}</Label>
      <MuiSelect
        {...rest}
        disableUnderline
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={value}
        onChange={onChange}
      >
        {selections.length > 0 &&
          selections.map((item) => <Item value={item.value}>{item.label}</Item>)}
      </MuiSelect>
    </MuiFormControl>
  );
};

StyledSelect.propType = {
  selections: PropTypes.array,
  label: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  fullWidth: PropTypes.bool,
  variant: PropTypes.string,
  size: PropTypes.string,
};
