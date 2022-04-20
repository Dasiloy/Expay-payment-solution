import * as React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

export default function MuiBreadCrumbs({ children, ...rest }) {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      {...rest}
    >
      {children}
    </Breadcrumbs>
  );
}

MuiBreadCrumbs.propTypes = {
  children: oneOfType([PropTypes.node, PropTypes.any]),
};
