import React from 'react';
import Link from 'next/link';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PropTypes from 'prop-types';
import  {MuiBox} from 'muibase';
import {PrimaryButton, OutlinedButton, SubBody } from 'styled';
import { useTheme } from '@mui/material/styles';
import { ThemeToggler } from 'components';

const SidebarNav = ({ links = [], onClose }) => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <MuiBox width={1} paddingX={2} paddingY={2}>
      <MuiBox display='flex' justifyContent='space-between' alignItems='center'>
        <Link  href="/">
          <MuiBox
            objectFit={'cover'}
            component={'a'}
            title="AfricExpay"
            height={{xs:20, md:30}}
            maxWidth={{ xs: 120, md: 180 }}
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
        <ThemeToggler />
      </MuiBox>
      <MuiBox marginY={4} paddingX={1} paddingY={2}>
        {links.length > 0 && links.map((link) => {
          const {title, href} = link;
          return (
            <MuiBox
              marginBottom={4}
              key={title}
              sx={{ cursor: 'pointer' }}
            >
              <MuiBox onClick={onClose} component='a' href={`#${href}`}>
                <SubBody style={{fontSize:'17px', fontWeight:600}} color='text.link' sx={{'&:hover':{
                  color:theme.palette.primary.main,
                }}}>{title}</SubBody>
              </MuiBox>
            </MuiBox>
          );
        })}
        <MuiBox marginTop={4}>
          <OutlinedButton
            fullWidth
            href="/auth/signup"
          >
           Log in
          </OutlinedButton>
        </MuiBox>
        <MuiBox marginTop={2}>
          <PrimaryButton
            fullWidth
            href="/auth/login"
          >
            Sign Up
          </PrimaryButton>
        </MuiBox>
      </MuiBox>
    </MuiBox>
  );
};

SidebarNav.propTypes = {
  links: PropTypes.array.isRequired,
  onClose:PropTypes.func.isRequired,
};

export default SidebarNav;
