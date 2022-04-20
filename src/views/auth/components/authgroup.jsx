import React from 'react';
import PropTypes from 'prop-types';
import { useMediaQuery, useTheme } from '@mui/material';
import { PageAnimator } from 'components';
import { MuiGrid, MuiBox } from 'muibase';
import TopBar from './topBar';
import Display from './display';

function AuthGroup({children}) {
  const theme =useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiBox>
      <MuiBox marginBottom={6}>
        <TopBar />
      </MuiBox>
      <MuiGrid container spacing={6} justifyContent={'space-between'}>
        <MuiGrid item xs={10}  md={6} marginX={'auto'} data-aos={isMd ? 'fade-right' : 'fade-up'}
          data-aos-delay="300"
          data-aos-offset={isMd && '300' }
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
        >
          <PageAnimator>
            {children}
          </PageAnimator>
        </MuiGrid>
        <MuiGrid item sx={{ display: { xs: 'none', md: 'flex' } }} xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}
          data-aos-delay="300"
          data-aos-offset={isMd && '300'}
          data-aos-duration="500"
          data-aos-easing="ease-in-sine">
          <Display />
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default AuthGroup;

AuthGroup.propType = {
  children:PropTypes.node,
};
