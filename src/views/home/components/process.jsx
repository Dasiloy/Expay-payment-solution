import React from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { Display } from 'views/auth/components';
import ProcessInfo from './processInfo';
import { MuiGrid } from 'muibase';
import { ThemeToggler } from 'components';

function Process() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiGrid id={'Connect'} container spacing={2} justifyContent={'space-between'}>
      <MuiGrid item xs={12}  md={7}  marginX={'auto'}
      >
        <ProcessInfo />
      </MuiGrid>
      <MuiGrid item sx={{ display: { xs: 'none', md: 'flex' } }} xs={12} md={5}  data-aos={isMd ? 'fade-left' : 'fade-up'}
        data-aos-delay="300"
        data-aos-offset={isMd && '300'}
        data-aos-duration="500"
        data-aos-easing="ease-in-sine">
        <Display hideLabel />
      </MuiGrid>
    </MuiGrid>
  );
}

export default Process;
