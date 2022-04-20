import React from 'react';
import { Title, IconDetails} from 'components';
import { MuiBox, MuiGrid } from 'muibase';
import { Container } from 'components';

// import features data
import { features} from 'constants';

export default function Features () {
  return <MuiBox data-aos='fade-up' >
    <MuiBox display={'flex'} justifyContent={'center'}>
      <Title title='FEATURES'/>
    </MuiBox>
    <Container isFullscreen >
      <MuiGrid container  justifyContent={'center'} spacing={{xs:4,sm:6,md:8,lg:12}}>
        {features?.length > 0 && features.map((feature) => <MuiGrid key={feature.id} item xs={12} sm={6} md={4} lg={2}  justifyContent={'center'} spacing={6}>
          <IconDetails title={feature.text} src={feature.src}/>
        </MuiGrid>)}
      </MuiGrid>
    </Container>
  </MuiBox>;
}
