import React from 'react';
import Image from 'next/image';
import {useTheme} from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { Title } from 'components';
import { MuiBox, MuiGrid } from 'muibase';
import storyImage from '../../../../public/svgs/Rectangle 784.svg';
import { HeadingFive, HeadingThree, HeadingSix, MainBody, SubBody } from 'styled';

function Vision() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiBox  marginTop={isMd ? 3 : 2} id="Vision">
      <MuiBox textAlign='center' data-aos={'fade-up'}>
        <Title title='OUR VISION'/>
      </MuiBox>
      <MuiGrid container spacing={isMd ? 10 : 6} marginTop={1}>
        <MuiGrid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Image src={storyImage}/>
        </MuiGrid>
        <MuiGrid item xs={12} md={6} data-aos={isMd ? 'fade-left' : 'fade-up'}>
          <HeadingThree gutterBottom>{'The last piece of the puzzle'}</HeadingThree>
          <SubBody sx={{fontSize:'14px'}}  marginTop={3}>{'How will our clients pay vendors whilst using already trusted infrastructure for a lower fee?'}</SubBody>
          <SubBody sx={{fontSize:'14px'}} color={'text.dashed'} marginTop={3}>{'We already imagined a world where making  payments to Africa was a bit easier and cheaper. We have merged the power of the best payment infrastructures in various regions to create one holistic simplified payment gateway that is cheaper for all parties and rides on already existing trust.'}</SubBody>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default Vision;
