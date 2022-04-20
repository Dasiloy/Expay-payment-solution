import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox, MuiAvatar } from 'muibase';

export default function GenImage({
  imageUrl = '',
  height = { xs: 100, sm: 150, md: 200 },
  width = 1,
}) {
  return (
    <MuiBox sx={{ width: '100%', objectFit: 'cover' }}>
      <MuiAvatar
        variant={'rounded'}
        alt="The image"
        src={imageUrl}
        sx={{
          width,
          height,
          borderRadius: '6px',
        }}
      />
    </MuiBox>
  );
}

GenImage.propTypes = {
  imageUrl: PropTypes.string,
  height: PropTypes.object,
  width: PropTypes.number,
};
