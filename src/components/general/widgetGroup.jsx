import { MuiGrid } from 'muibase';
import React from 'react';
import { useTheme } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Widget from './widget';

export default function WidgetGroup({ widgets = [], showBorder = true }) {
  const theme = useTheme();
  return (
    <MuiGrid
      container
      alignItems={'center'}
      justifyContent={'space-between'}
      paddingY={3}
      paddingX={{ xs: 2, sm: 3, md: 4, lg: 6 }}
      sx={{
        border: showBorder ? '1px solid' : 'none',
        borderColor: theme.palette.divider,
        borderRadius: '8px',
        boxShadow: theme.shadows[0],
      }}
    >
      {widgets.length > 0 &&
        widgets.map((widget, i) => <Widget key={widget.title} {...widget} index={i} />)}
    </MuiGrid>
  );
}

WidgetGroup.propType = {
  widgets: PropTypes.array,
  showBorder: PropTypes.bool,
};
