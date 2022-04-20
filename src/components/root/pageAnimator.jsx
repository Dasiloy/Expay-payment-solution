import React from 'react';
import PropTypes from 'prop-types';
import {motion} from 'framer-motion';

export default function PageAnimator ({children}) {
  //declare easing animation
  const easing = [0.6, -0.05, 0.01, 0.99];

  //declare animation
  const fadeOut = {
    initial:{
      opacity:0,
    },
    animate:{
      opacity:1,
      transition:{
        delay:0.2,
        duration:0.7,
        easing,
      },
    },
  };

  return (
    <motion.div variants={fadeOut} initial='initial' animate="animate" exit={{opacity:0}}>
      {children}
    </motion.div>
  );
}

PageAnimator.propType = {
  children:PropTypes.node.isRequired,
};
