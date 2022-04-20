import React from 'react';
import {MuiTypography} from 'muibase';

export const HeadingOne = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h1'} {...rest} sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};

export const HeadingTwo = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h2'} {...rest}  sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};

export const HeadingThree = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h3'} {...rest} sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};

export const HeadingFour = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h4'} {...rest}  sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};
export const HeadingFive = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h5'} {...rest} sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};

export const HeadingSix = ({isNotCapitalize, ...rest}) => {
  return (
    <MuiTypography variant={'h6'} {...rest}  sx={{textTransform:isNotCapitalize ? '' : 'capitalize'}}/>
  );
};

export const MainBody = ({...rest}) => {
  return (
    <MuiTypography variant={'body1'} {...rest}/>
  );
};

export const SubBody = ({...rest}) => {
  return (
    <MuiTypography variant={'body2'} {...rest}/>
  );
};

export const SubTitle2 = ({...rest}) => {
  return (
    <MuiTypography variant="subtitle2" {...rest}/>
  );
};

export const SubTitle1 = ({...rest}) => {
  return (
    <MuiTypography variant="subtitle1" {...rest}/>
  );
};
