import React from 'react';
import propTypes from 'prop-types';

// import AnimatePrescence to animate page transitions
import { AnimatePresence } from 'framer-motion';
/* Next js page navigator indicator */
import NextNProgress from 'nextjs-progressbar';

//import base page component for theming
import { Page } from 'components';

/* import baseStyles */
import 'styles/globals.css';

// library styles
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
// scroll bar
import 'simplebar/src/simplebar.css';
// uppy styles
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#00A5D6" />
      <Page>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Page>
    </>
  );
}
MyApp.propTypes = {
  pageProps: propTypes.object.isRequired,
  Component: propTypes.elementType.isRequired,
};
export default MyApp;
