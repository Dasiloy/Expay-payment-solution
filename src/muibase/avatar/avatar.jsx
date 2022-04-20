import React from 'react';
import  PropTypes  from 'prop-types';
import  Avatar  from '@mui/material/Avatar';

export default function MuiAvatar ({alt, src, ...rest}) {
  return (
    <Avatar alt={alt} src={src} {...rest}/>
  );
}

MuiAvatar.propType = {
  alt:PropTypes.string,
  src:PropTypes.string,
  rest:PropTypes.obj,
};
