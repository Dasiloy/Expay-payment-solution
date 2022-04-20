import React from 'react';
import PropTypes from 'prop-types';
import {LazyLoadImage} from 'react-lazy-load-image-component';
import { MuiBox} from 'muibase';
import {SubBody} from 'styled';

function IconDetails({src = '', title = '' }) {
  return (
    <MuiBox >
      <MuiBox
        marginX='auto'
        marginBottom={3}
        objectFit={'cover'}
        component={'div'}
        title={title}
        height={{xs:25, md:30}}
        maxWidth={{ xs: 25, md: 30 }}
      >
        <MuiBox
          component={LazyLoadImage}
          src={
            src
          }
          height={1}
          width={1}
        />
      </MuiBox>
      <SubBody textAlign={'center'} style={{fontWeight:500, fontSize:'0.96rem'}} >
        {title}
      </SubBody>
    </MuiBox>
  );
}

export default IconDetails;

IconDetails.propTypes  = {
  title:PropTypes.string,
  src:PropTypes.string.isRequired,
};
