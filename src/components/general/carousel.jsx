import React from 'react';
import { MuiBox, MuiStack } from 'muibase';
import { styled, alpha } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import { FaAngleRight, FaAngleLeft } from 'react-icons/fa';

// this is the list required for Carousel.... you can name the function any how you want it, make sure to return an array!
//  const credentialsList = () => {
//     return list.map((item, i) => ({
//       ...item,
//       Render: ({ children }) => (
//         <MuiBox marginBottom={3}>
//           <Image key={i} imageUrl={item.imageUrl} />
//           <MuiBox marginY={1} />
//           <MuiBox display={'flex'} alignitems={'center'} justifyContent={'space-between'}>
//             <HeadingFive>{`${i + 1}. ${item.title}`}</HeadingFive>
//             {children}
//           </MuiBox>
//         </MuiBox>
//       ),
//     }));
//   };

// style buttons
const StyledButtons = styled('button')(({ theme, disabled }) => ({
  color: disabled ? alpha(theme.palette.grey[600], 0.3) : theme.palette.primary.main,
  cursor: disabled ? 'not-allowed' : 'pointer',
  opacity: disabled ? 0.8 : 1,
  background: 'transparent',
  border: 'none',
  outline: 'none',
  fontSize: '1.2rem',
}));

function Carousel({ list = [] }) {
  // ref to pick up slider methods
  const slider = React.useRef(null);

  // state to manually control buttons
  const [activeIndex, setActiveIndex] = React.useState(0);

  // prev button
  const Prev = () => (
    <StyledButtons disabled={activeIndex === 0} onClick={() => slider?.current?.slickPrev()}>
      <FaAngleLeft />
    </StyledButtons>
  );

  // next button
  const Next = () => (
    <StyledButtons
      disabled={activeIndex === list.length - 1}
      onClick={() => slider?.current?.slickNext()}
    >
      <FaAngleRight />
    </StyledButtons>
  );

  // sliderOpts
  const sliderOpts = {
    dots: false,
    arrows: false,
    className: 'center',
    lazyLoad: true,
    infinite: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    afterChange: (current) => {
      setActiveIndex(current);
    },
    beforeChange: (current, next) => {
      //   console.log(current, next);
    },
  };

  return (
    <MuiBox maxWidth={{ xs: 420, sm: 620, md: 1 }} margin={'0 auto'}>
      <Slider {...sliderOpts} ref={slider}>
        {list.length > 0 &&
          list.map((item, i) => {
            const { Render } = item;
            return (
              <MuiBox width={1} height={1}>
                <Render>
                  <MuiStack direction={'row'} spacing={1}>
                    <Prev />
                    <Next />
                  </MuiStack>
                </Render>
              </MuiBox>
            );
          })}
      </Slider>
    </MuiBox>
  );
}

Carousel.propTypes = {
  list: PropTypes.array,
};

export default Carousel;
