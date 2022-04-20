import React from 'react';
import Link from 'next/link';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTheme, useMediaQuery} from '@mui/material';
import { MuiBox } from 'muibase';

function TopBar() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiBox
      paddingY={4} paddingX={isMd? 10 : 6}
      display={'flex'}
      justifyContent={isMd ? 'flex-end' : 'flex-start'}
      alignItems={'center'}
      width={1}>
      <Link  href="/">
        <MuiBox
          objectFit={'cover'}
          component={'a'}
          title="AfricExpay"
          height={{xs:28, md:35}}
          maxWidth={{ xs: 180, md: 233 }}
        >
          <MuiBox
            component={LazyLoadImage}
            sx={{cursor:'pointer'}}
            src={
              theme.palette.mode === 'light'
                ? '/svgs/logo.svg'
                : '/svgs/logo-light.svg'
            }
            height={1}
            width={1}
          />
        </MuiBox>
      </Link>
    </MuiBox>
  );

}

export default TopBar;
