import React from 'react';
import PropTypes from 'prop-types';
import  Card  from '@mui/material/Card';
import  CardHeader  from '@mui/material/CardHeader';
import  CardContent  from '@mui/material/CardContent';
import  CardActionArea  from '@mui/material/CardActionArea';
import  CardMedia  from '@mui/material/CardMedia';
import  CardActions  from '@mui/material/CardActions';

export default function MuiCard ({children, variant, ...rest}) {
  return <Card variant={variant} {...rest}>
    {children}
  </Card>;
}

MuiCard.propType = {
  variant:PropTypes.string,
  children:PropTypes.node,
};

MuiCard.Header = CardHeader;
MuiCard.Content = CardContent;
MuiCard.ActionsArea = CardActionArea;
MuiCard.Media = CardMedia;
MuiCard.Action =CardActions;
