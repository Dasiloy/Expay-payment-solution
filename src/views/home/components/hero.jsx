import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox, MuiGrid } from 'muibase';
import { useTheme } from '@mui/material';
import { PrimaryButton, HeadingTwo } from 'styled';

export default function Hero ({text, title}) {
  const theme = useTheme();
  return <MuiBox width='100%' paddingY={6} paddingX={4} sx={{background:theme.palette.alternate.light}}>
    <MuiGrid container justifyContent={'center'}>
      <MuiGrid data-aos='fade-up' item xs={12} sm={10} md={6} lg={6} justifyContent={'center'} alignItems={'center'} sx={{textAlign:'center'}}>
        <HeadingTwo gutterBottom>{title}</HeadingTwo>
        <MuiBox marginBottom={4}/>
        <PrimaryButton>{text}</PrimaryButton>
      </MuiGrid>
    </MuiGrid>
  </MuiBox>;
}

Hero.propTypes = {
  isRegister:PropTypes.bool,
  text:PropTypes.string,
  title:PropTypes.string,
};
