import React, {useEffect, useState} from 'react';
import { Stack } from '@mui/material';
import {HeadingSix, TextButton} from 'styled';

function Timer() {
  // state variables for time minutes and seconds
  const [timer, setTimer] = useState({
    seconds:0,
    minutes:3,
  });

  // reset time values
  const handleReset = () => setTimer({
    minutes:2,
    seconds:59,
  });
  useEffect(() => {
    const {seconds, minutes} = timer;
    const myInterval = setInterval(() => {
      // decrease seconds by one on every second as long as seconds is larger than one
      if(seconds > 0 ) setTimer({...timer, seconds:seconds -1 });

      // checks if seconds count is down to zero
      if(seconds === 0){
        // checks if countdown is complete and stops state update
        if(minutes === 0 ) return;
        // decreases seconds as long minute is not zero
        else {
          setTimer({
            minutes:minutes - 1,
            seconds:59,
          });
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval, 1000);
    };
  }, [timer]);
  const {minutes, seconds} = timer;
  if(minutes === 0 && seconds === 0){
    return <TextButton onClick={handleReset}>Resend Code</TextButton>;
  }
  return (
    <Stack direction='row' spacing={2}>
      <HeadingSix color={'primary'}>Resend</HeadingSix>
      <HeadingSix color={'text.dashed'}>{`${timer.minutes} : ${timer.seconds < 10 ? `0${timer.seconds}` : timer.seconds}`}</HeadingSix>
    </Stack>
  );
}

export default Timer;
