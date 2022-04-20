import React from 'react';
import PropTypes from 'prop-types';
import  Switch  from '@mui/material/Switch';

export default function MuiSwitch ({defaultChecked, ...rest}) {
  return (
    <Switch defaultChecked={defaultChecked} {...rest}/>
  );
}

MuiSwitch.propType = {
  defaultChecked:PropTypes.bool,
};
