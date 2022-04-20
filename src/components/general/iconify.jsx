import React from 'react';
import PropTypes from 'prop-types';
// icons
import { Icon } from '@iconify/react';
import { MuiBox } from 'muibase';

export default function Iconify({ icon, sx, ...other }) {
  return <MuiBox component={Icon} icon={icon} sx={{ ...sx }} {...other} />;
}

Iconify.propTypes = {
  icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string, PropTypes.node]),
  sx: PropTypes.object,
};
