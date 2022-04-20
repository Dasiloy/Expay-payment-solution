import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useMediaQuery, useTheme } from '@mui/material';
import { MuiBox, MuiButton } from 'muibase';
import { HeadingOne } from 'styled';
import DisplayImage from '../../../../public/svgs/Illustration.svg';
import DisplayImageHome from '../../../../public/svgs/display.svg';

function Display({hideLabel}) {
  const theme =useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches:true,
  });
  return (
    <MuiBox>
      {!hideLabel &&   <HeadingOne maxWidth={isLg ? '70%' :'80%'} gutterBottom marginBottom={8}>
        The Easiest way to send Payments to vendors
      </HeadingOne>}
      <MuiBox paddingLeft={12}>
        <Image src={ hideLabel ? DisplayImageHome : DisplayImage} />
      </MuiBox>
    </MuiBox>
  );
}

export default Display;

Display.propType = {
  hideLabel: PropTypes.bool,
};
