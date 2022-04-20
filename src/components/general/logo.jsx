import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import { MuiBox } from 'muibase';

export default function Logo ({height, width}) {
  const theme = useTheme();
  return (
    <Link  href="/">
      <MuiBox
        objectFit={'cover'}
        component={'a'}
        title="AfricExpay"
      >
        <MuiBox
          component={LazyLoadImage}
          sx={{cursor:'pointer'}}
          src={theme.palette.mode === 'light' ?  '/svgs/logo.svg'
            : '/svgs/logo-light.svg'
          }
          height={height || 1}
          width={width || 1}
        />
      </MuiBox>
    </Link>
  );
}

Logo.propType = {
  height:PropTypes.number,
  width:PropTypes.number,
};
