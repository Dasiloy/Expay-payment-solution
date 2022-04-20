import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import { MuiBox } from 'muibase';
import { HeadingFour, SubBody } from 'styled';

function FeedbackModal({ title = '', content = '', timeout = 200, onClose = () => {} }) {
  React.useEffect(() => {
    setTimeout(() => {
      onClose();
    }, timeout);
  }, []);
  return (
    <MuiBox
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      sx={{ minHeight: '100%' }}
      marginTop={{ xs: 8, md: 0 }}
      data-aos={'fade-in'}
    >
      <MuiBox>
        <MuiBox marginBottom={1} mx={'auto'} textAlign={'center'}>
          <Image src="/svgs/successful.svg" alt={'successful'} width={70} height={70} />
        </MuiBox>
        <HeadingFour textAlign="center !important" gutterBottom>
          {title}
        </HeadingFour>
        <SubBody
          textAlign="center !important"
          color="text.dashed"
          maxWidth={{ xs: '100%', md: '60%' }}
          mx={'auto'}
          fontSize={'16px !important'}
        >
          {content}
        </SubBody>
      </MuiBox>
    </MuiBox>
  );
}

FeedbackModal.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default FeedbackModal;
