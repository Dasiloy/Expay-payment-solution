import React from 'react';
import {useTheme} from '@mui/material/styles';
import { MuiBox } from 'muibase';
import { Container } from 'components';
import { PageLayout } from 'layouts';
import { Hero, Features, Process, Demo, Vision, Faq, Partners } from './components';

export default function Home () {
  const theme = useTheme();
  return (
    <PageLayout>
      <Hero title={'Easier, Cheaper way of Paying Vendors '} text={'Connect your app'}/>
      <Container isFullscreen>
        <Features />
      </Container>
      <MuiBox>
        <Process />
      </MuiBox>
      <MuiBox bgcolor={theme.palette.alternate.light}>
        <Container  isFullscreen >
          <Demo />
        </Container>
      </MuiBox>
      <Container isFullscreen >
        <Vision />
      </Container>
      <Container isFullscreen>
        <Faq />
      </Container>
      <Container isFullscreen>
        <Partners />
      </Container>
    </PageLayout>
  );
}
