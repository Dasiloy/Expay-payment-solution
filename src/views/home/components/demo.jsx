import React from 'react';
import {useTheme} from '@mui/material/styles';
import Image from 'next/image';
import { useMediaQuery } from '@mui/material';
import { HeadingTwo, SubBody } from 'styled';
import { MuiBox, MuiGrid } from 'muibase';
import { Title } from 'components';
import Right from '../../../../public/svgs/Right.svg';
import Left from '../../../../public/svgs/Left.svg';
import favicon from '../../../../public/svgs/favicon.svg';

function Demo() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });
  return (
    <MuiBox textAlign='center' id="How">
      <MuiBox  data-aos='fade-up'>
        <Title title={'AFRICEXPAY'}/>
        <HeadingTwo marginY={isMd ? 5 :4}>
        How it works
        </HeadingTwo>
      </MuiBox>
      <MuiGrid container spacing={4} marginTop={isMd ? 2 : 1}>
        <MuiGrid item xs={12} md={5}  data-aos={isMd ? 'fade-right' : 'fade-up'}>  <Image src={Left} /></MuiGrid>
        <MuiGrid item xs={12} md={2} justifyContent={'center'} alignItems={'center'}>
          <MuiBox height="100%" display='flex' alignItems='center' flexDirection='column' justifyContent='center'>
            <MuiBox textAlign='center' padding={2} bgcolor='#fff' sx={{borderRadius:'50%'}}>
              <Image src={favicon}/>
            </MuiBox>
            <SubBody marginTop={2}>
              {'merchants (2.5%)'}
            </SubBody>
          </MuiBox>
        </MuiGrid>
        <MuiGrid item xs={12} md={5} data-aos={isMd ? 'fade-left' : 'fade-up'}>    <Image src={Right} /></MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

export default Demo;
