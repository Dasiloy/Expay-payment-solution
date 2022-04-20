import React from 'react';
import Image from 'next/image';
import {useTheme} from '@mui/material/styles';
import Slider from 'react-slick';
import { useMediaQuery } from '@mui/material';
import clients from '../data/partners';
import { MuiBox } from 'muibase';

export default function Partners () {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.up('xs'), {
    defaultMatches: true,
  });
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), {
    defaultMatches: true,
  });
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  let slidesToShow = 2;
  if (isXs) {
    slidesToShow = 2;
  }
  if (isSm) {
    slidesToShow = 3;
  }
  if (isMd) {
    slidesToShow = 4;
  }
  if (isLg) {
    slidesToShow = 5;
  }

  const sliderOpts = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <MuiBox paddingY={2}>
      <MuiBox>
        <Slider {...sliderOpts}>
          {clients.map((item, i) => (
            <MuiBox key={i} display={'flex'} alignItems={'center'}>
              <MuiBox
                component="img"
                width={item.width}
                height={item.height}
                src={item.src}
                alt="..."
                sx={{
                  filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
                }}
              />
            </MuiBox>
          ))}
        </Slider>
      </MuiBox>
    </MuiBox>
  );
}
