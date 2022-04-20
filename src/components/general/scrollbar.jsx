import React from 'react';
import PropTypes from 'prop-types';

// react vertical simple bar
import SimpleBarReact from 'simplebar-react';

// mui mediaQuery
import useMediaQuery from '@mui/material/useMediaQuery';

// material ui style utilities
import { alpha, styled, useTheme } from '@mui/material/styles';

import { MuiBox } from 'muibase';

const RootStyle = styled('div')({
  flexGrow: 1,
  height: '100%',
  overflow: 'hidden',
});

const SimpleBarStyle = styled(SimpleBarReact)(({ theme }) => ({
  maxHeight: '100%',
  '& .simplebar-scrollbar': {
    '&:before': {
      backgroundColor: alpha(theme.palette.grey[400], 0.48),
    },
    '&.simplebar-visible:before': {
      opacity: 0.2,
    },
  },
  '& .simplebar-track.simplebar-vertical': {
    width: 1,
  },
  '& .simplebar-track.simplebar-horizontal .simplebar-scrollbar': {
    height: 1,
  },
  '& .simplebar-mask': {
    zIndex: 'inherit',
  },
}));

export default function Scrollbar({ children, sx, ...rest }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));

  if (isMobile) {
    return (
      <MuiBox sx={{ overflowX: 'auto', ...sx }} {...rest}>
        {children}
      </MuiBox>
    );
  }

  return (
    <RootStyle>
      <SimpleBarStyle timeout={400} clickOnTrack={true} sx={sx} {...rest}>
        {children}
      </SimpleBarStyle>
    </RootStyle>
  );
}

Scrollbar.propTypes = {
  children: PropTypes.node.isRequired,
  sx: PropTypes.object,
};
