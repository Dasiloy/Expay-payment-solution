import React from 'react';
import { AnimatedLineProgressBar, LineProgressBar } from '@frogress/line';

const ProgressLineChart = ({
  percent,
  height,
  rounded,
  direction,
  width,
  stripe,
  progressColor,
  containerColor,
}) => {
  return (
    <LineProgressBar
      stripe={stripe}
      percent={percent}
      rounded={rounded}
      height={height}
      width={width}
      direction={direction}
      progressColor={progressColor}
      containerColor={containerColor}
    />
  );
};

const AnimatedProgressLineChart = ({
  percent,
  height,
  rounded,
  direction,
  width,
  stripe,
  progressColor,
  containerColor,
}) => {
  return (
    <AnimatedLineProgressBar
      stripe={stripe}
      percent={percent}
      rounded={rounded}
      height={height}
      width={width}
      direction={direction}
      progressColor={progressColor}
      containerColor={containerColor}
      transition={{ easing: 'backOut' }}
    />
  );
};

ProgressLineChart.Animated = AnimatedProgressLineChart;

export default ProgressLineChart;
