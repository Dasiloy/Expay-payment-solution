import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { alpha } from '@mui/material';
import {useTheme} from '@mui/material/styles';
import { MuiBox, MuiStack } from 'muibase';
import { PrimaryButton, OutlinedButton, SubBody } from 'styled';
import { ThemeToggler } from 'components';
import MenuIcon from '@mui/icons-material/Menu';

function Navbar({navLinks = [], onSidebarOpen, trigger}) {
  const theme = useTheme();
  return (
    <MuiBox
      position={'relative'}
      maxWidth={{ sm: 720, md: 1300 }}
      width={1}
      paddingX={{xs:4, sm:6, md:8}}
      paddingY={{xs:2, sm:trigger ? 2 : 3 }}
      margin={'0 auto'}>
      <MuiBox
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
        width={1}
      >
        <MuiStack direction={'row'} spacing={10} alignItems={'center'}>
          <Link  href="/">
            <MuiBox
              objectFit={'cover'}
              component={'a'}
              title="AfricExpay"
              height={{xs:25, md:30}}
              maxWidth={{ xs: 165, md: 175 }}
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
          <MuiBox sx={{ display: { xs: 'none', lg: 'flex' } }} alignItems={'center'}>
            {navLinks.length > 0 && navLinks.map((link) => {
              const {title, href} = link;
              return (
                <MuiBox
                  marginRight={4}
                  key={title}
                  sx={{ cursor: 'pointer' }}
                >
                  <MuiBox component='a' href={`#${href}`}>
                    <SubBody style={{fontSize:'17px', fontWeight:600}} color='text.link'  sx={{'&:hover':{
                      color:theme.palette.primary.main,
                    }}}>{title}</SubBody>
                  </MuiBox>
                </MuiBox>
              );
            })}
          </MuiBox>
        </MuiStack>
        <MuiBox  sx={{
          display:{
            xs:'none',
            lg:'flex',
          },
        }}  alignItems={'center'}>
          <MuiBox>
            <OutlinedButton href='/auth/login'>
            Log in
            </OutlinedButton>
          </MuiBox>
          <MuiBox marginLeft={2}>
            <PrimaryButton
              sx={{boxShadow:'none'}}
              href="/auth/signup"
            >
             Sign up
            </PrimaryButton>
          </MuiBox>
          <MuiBox marginLeft={2}>
            <ThemeToggler />
          </MuiBox>
        </MuiBox>
        <MuiBox sx={{ display: { xs: 'block', lg: 'none' } }} alignItems={'center'}>
          <OutlinedButton
            onClick={() => onSidebarOpen()}
            aria-label="Menu"
            variant={'outlined'}
            sx={{
              borderRadius: 2,
              minWidth: 'auto',
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <MenuIcon />
          </OutlinedButton>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
}
export default Navbar;

Navbar.propTypes = {
  navLinks:PropTypes.array,
  trigger:PropTypes.bool,
  onSidebarOpen:PropTypes.func,
};
