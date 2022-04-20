import React from 'react';
import Link from 'next/link';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useTheme} from '@mui/material';
import { MuiBox } from 'muibase';

function TopBarCenter() {
  const theme = useTheme();
  return (
    <MuiBox
      paddingY={4} paddingX={6}
      display={'flex'}
      justifyContent={'center'}
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

export default TopBarCenter;
