import React from 'react';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import  ListItem  from '@mui/material/ListItem';
import  ListItemAvatar  from '@mui/material/ListItemAvatar';
import  ListItemButton  from '@mui/material/ListItemButton';
import  ListItemIcon  from '@mui/material/ListItemIcon';
import  ListItemText  from '@mui/material/ListItemText';
import  ListSubheader  from '@mui/material/ListSubheader';
import  ListItemSecondaryAction  from '@mui/material/ListItemSecondaryAction';

export default function MuiList ({className, classes, component, dense, disablePadding, subHeader, sx, children, ...rest}) {
  return (
    <List
      className={className}
      classes={classes}
      component={component}
      dense={dense}
      disablePadding={disablePadding}
      subheader={subHeader}
      sx={sx}
      {...rest}
    >
      {children}
    </List>
  );
}

MuiList.propType = {
  className:PropTypes.object,
  classes:PropTypes.object,
  sx:PropTypes.object,
  rest:PropTypes.object,
  component:PropTypes.any,
  dense:PropTypes.bool,
  disablePadding:PropTypes.bool,
  children:PropTypes.node,
  subHeader:PropTypes.node,
};

MuiList.Item = ListItem;
MuiList.Avatar = ListItemAvatar,
MuiList.Button = ListItemButton;
MuiList.Icon = ListItemIcon;
MuiList.Text = ListItemText;
MuiList.SubHeader = ListSubheader;
MuiList.secondaryAction = ListItemSecondaryAction;
