import React from 'react';
import {useTheme} from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { MuiBox, MuiCard, MuiGrid } from 'muibase';
import { Container } from 'components';
import { Title } from 'components';
import { HeadingFive, HeadingTwo, SubBody } from 'styled';
import demo from '../data/processdata';

export default function processInfo () {
  const { Content } = MuiCard;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches:true,
  });

  return (
    <Container isFullscreen noTopPadding >
        <MuiBox data-aos='fade-up'>
        <Title title='SEE FOR YOURSELF'/>
      <HeadingTwo marginTop={isMd ? 5 :4}>
        How it works
      </HeadingTwo>
    </MuiBox>
      <MuiBox marginTop={isMd ? 6 : 4}>
        <MuiGrid container spacing={3}>
            {demo?.length > 0 && demo.map((item, index) =>   <MuiGrid item xs={12} md={6}  key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-offset={100}
                data-aos-duration={600}>
             <MuiBox      display={'block'}
            width={1}
            sx={{
              transform: index % 2 === 1 ? { md: 'translateY(40px)' } : 'none',
            }}>
             <MuiCard variant={'outlined'} sx={{ minWidth: '100%' }}>
              <Content>
              <HeadingFive gutterBottom>{item.title}</HeadingFive>
              <SubBody style={{fontSize:"15px",fontWeight:'bold'}} color={'text.dashed'} marginTop={3}>{item.text}</SubBody>
              </Content>
            </MuiCard>
            </MuiBox>
          </MuiGrid> )}
        </MuiGrid>
      </MuiBox>
    </Container>
  );
}
