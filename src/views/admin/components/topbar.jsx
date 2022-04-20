import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox } from 'muibase';
import { HeadingTwo, ButtonWithIconStart, DashBoardButtonGroup, DateFilterButton } from 'styled';

function Topbar({ title = '', children }) {
  return (
    <MuiBox
      marginBottom={3}
      marginTop={5}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <HeadingTwo style={{ marginBottom: '0 !important' }} gutterBottom={false}>
        {title}
      </HeadingTwo>
      {children}
    </MuiBox>
  );
}

export default Topbar;

Topbar.propType = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
