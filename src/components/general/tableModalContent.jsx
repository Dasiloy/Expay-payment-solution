import React from 'react';
import PropTypes from 'prop-types';
import { HeadingFive } from 'styled';
import { MuiBox, MuiDivider } from 'muibase';
import { Iconify } from '.';
import Scrollbar from 'layouts/dashboard/components/sidebar/scrollbar';

const TableModalContent = ({ title = '', children, onClose, ...rest }) => {
  return (
    <Scrollbar sx={{ maxHeight: '80vh' }}>
      <MuiBox sx={{ width: '100%' }} {...rest}>
        <MuiBox display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <HeadingFive>{title}</HeadingFive>
          <Iconify
            width={'16px'}
            height={'16px'}
            onClick={() => {
              onClose && onClose();
            }}
            icon="fa:close"
            sx={{
              cursor: 'pointer',
            }}
          />
        </MuiBox>
        <MuiBox marginTop={1.5} marginBottom={4}>
          <MuiDivider />
        </MuiBox>
        {children}
      </MuiBox>
    </Scrollbar>
  );
};

export default TableModalContent;

TableModalContent.propType = {
  title: PropTypes.string.isRequired,
  onClose: PropTypes.func,
  children: PropTypes.node,
  rest: PropTypes.object,
};
