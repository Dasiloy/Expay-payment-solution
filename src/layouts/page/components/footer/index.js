import React from 'react';
import PropTypes from 'prop-types';
import {useTheme} from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import Link from 'next/link';
import {MuiGrid, MuiBox} from 'muibase';
import { Container } from 'components';
import { HeadingFive, MuiStyledInput, SubBody } from 'styled';

function Footer({links = [], support = []}) {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiBox bgcolor={theme.palette.mode === 'light' ? '#2F364A' : 'rgba(255, 255, 255, .05)'}>
      <Container isFullscreen>
        <MuiGrid container spacing={6} paddingTop={5} alignItems={'flex-start'}>
          <MuiGrid item xs={12} md={6} lg={4}>
            <Link  href="/">
              <MuiBox
                objectFit={'cover'}
                component={'a'}
                title="AfricExpay"
              >
                <MuiBox
                  component={LazyLoadImage}
                  sx={{cursor:'pointer'}}
                  src={
                    '/svgs/logo-light.svg'
                  }
                  height={0.55}
                  width={0.55}
                />
              </MuiBox>
            </Link>
            <SubBody maxWidth={isMd ? '80%' : '100%'} marginTop={3} style={{fontWeight:500, fontSize:'14px', color:theme.palette.mode === 'light' ? '#D8D9DD' : 'common.white', lineHeight:'28px'}} >
              Copyright 2022 Delight Group Incoporated Limited.
              <br/>
              All rights reserved
            </SubBody>
          </MuiGrid>
          <MuiGrid item container xs={12} md={6} lg={5}>
            <MuiGrid item xs={6}>
              <HeadingFive marginBottom={5} style={{ color:theme.palette.mode === 'light' ? '#D8D9DD' : 'common.white' }}>Company</HeadingFive>
              {links.length > 0 && links.map((link) => {
                const {title, href} = link;
                return (
                  <MuiBox
                    marginBottom={2}
                    key={title}
                    sx={{ cursor: 'pointer' }}
                    style={{fontSize:'14px'}}
                  >
                    <Link href={`${href}`}>
                      <MuiBox component='a' >
                        <SubBody style={{fontSize:'14px', fontWeight:600}} color='text.link' sx={{'&:hover':{
                          color:theme.palette.primary.main,
                        }}}>{title}</SubBody>
                      </MuiBox>
                    </Link>
                  </MuiBox>
                );
              })}
            </MuiGrid>
            <MuiGrid item xs={6}>
              <HeadingFive marginBottom={5} style={{ color:theme.palette.mode === 'light' ? '#D8D9DD' : 'common.white' }}>Support</HeadingFive>
              {support.length > 0 && support.map((link) => {
                const {title: _title, href: _href} = link;
                return (
                  <MuiBox
                    marginBottom={2}
                    key={_title}
                    sx={{ cursor: 'pointer' }}
                  >
                    <Link  href={`${_href}`}>
                      <MuiBox component='a'>
                        <SubBody style={{fontSize:'14px', fontWeight:600}} color='text.link' sx={{'&:hover':{
                          color:theme.palette.primary.main,
                        }}}>{_title}</SubBody>
                      </MuiBox>
                    </Link>
                  </MuiBox>
                );
              })}
            </MuiGrid>
          </MuiGrid>
          <MuiGrid item xs={12} md={6} lg={3}>
            <HeadingFive marginBottom={5} style={{ color:theme.palette.mode === 'light' ? '#D8D9DD' : 'common.white' }}>Stay up to date</HeadingFive>
            <MuiStyledInput />
          </MuiGrid>
        </MuiGrid>
      </Container>
    </MuiBox>
  );
}

export default Footer;

Footer.propType = {
  links:PropTypes.array,
  support:PropTypes.array,
};
