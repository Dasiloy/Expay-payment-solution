import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox, MuiGrid } from 'muibase';
import { useTheme } from '@mui/material';
import { MuiIconButton } from 'muibase';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { HeadingSix, HeadingTwo } from 'styled';

export default function Hero({ isRegister, text, title }) {
  const theme = useTheme();
  return (
    <MuiBox
      width="100%"
      paddingY={6}
      paddingX={4}
      sx={{ background: theme.palette.alternate.light }}
    >
      <MuiGrid container justifyContent={'center'}>
        <MuiGrid
          item
          xs={12}
          sm={10}
          md={8}
          lg={6}
          justifyContent={'center'}
          alignItems={'center'}
          sx={{ textAlign: 'center' }}
        >
          <MuiBox marginBottom={1}>
            <MuiIconButton
              color={theme.palette.mode === 'light' ? 'primary' : 'inherit'}
              aria-label="upload picture"
              component="span"
            >
              {isRegister ? (
                <PhotoCamera sx={{ fontSize: '2.5rem' }} />
              ) : (
                <PhotoCamera sx={{ fontSize: '2.5rem' }} />
              )}
            </MuiIconButton>
          </MuiBox>
          <HeadingTwo gutterBottom>{title}</HeadingTwo>
          <HeadingSix color={theme.palette.mode === 'light' ? 'text.dashed' : 'common.white'}>
            {text}
          </HeadingSix>
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
}

Hero.propTypes = {
  isRegister: PropTypes.bool,
  text: PropTypes.string,
  title: PropTypes.string,
};
