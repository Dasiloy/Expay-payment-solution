import React from 'react';
import { MuiBox } from 'muibase';
import ProgressLineChart from './progress-line-chart';
import { HeadingFive, HeadingSix, SubBody, SubTitle2, SubTitle1 } from 'styled';

export default function ProgressGroup({ progressInfo = [], isAnimated = true }) {
  const { Animated } = ProgressLineChart;
  if (isAnimated) {
    return (
      <MuiBox>
        {progressInfo.length > 0 &&
          progressInfo.map((progress, index) => (
            <MuiBox key={index} marginBottom={3}>
              <MuiBox display="flex" justifyContent={'space-between'} alignItems={'center'}>
                <HeadingSix>{progress.title}</HeadingSix>
                <SubTitle2>{progress.value}</SubTitle2>
              </MuiBox>
              <Animated
                key={index}
                percent={progress.percent}
                progressColor={progress.progressColor}
                containerColor={progress.containerColor}
                rounded={progress.rounded}
                height={progress.height}
              />
            </MuiBox>
          ))}
      </MuiBox>
    );
  }
  return (
    <MuiBox>
      {progressInfo.length > 0 &&
        progressInfo.map((progress, index) => (
          <MuiBox key={index} marginBottom={3}>
            <ProgressLineChart
              percent={progress.percent}
              progressColor={progress.progressColor}
              containerColor={progress.containerColor}
              rounded={progress.rounded}
              height={progress.height}
            />
          </MuiBox>
        ))}
    </MuiBox>
  );
}
