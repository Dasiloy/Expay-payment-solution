import React from 'react';
import PropTypes from 'prop-types';
import { MuiGrid } from 'muibase';
import { HeadingFive, SubBody } from 'styled';

function FormTitle({ title = '', subtitle = '', children, alignMent = 'auto', width = 7 }) {
  return (
    <MuiGrid container spacing={4}>
      <MuiGrid item xs={12} md={4}>
        <HeadingFive textAlign={{ xs: 'left !important' }} gutterBottom>
          {title}
        </HeadingFive>
        <SubBody
          textAlign={{ xs: 'left !important' }}
          color="text.dashed"
          fontSize={'16px !important'}
        >
          {subtitle}
        </SubBody>
      </MuiGrid>
      <MuiGrid item container xs={12}>
        <MuiGrid
          item
          container
          xs={12}
          sm={10}
          md={width || 7}
          sx={alignMent === 'auto' ? { marginX: alignMent } : null}
        >
          {children}
        </MuiGrid>
      </MuiGrid>
    </MuiGrid>
  );
}

FormTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  width: PropTypes.number,
  children: PropTypes.node,
};

export default FormTitle;
