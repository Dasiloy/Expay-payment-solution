import {styled, alpha} from '@mui/material/styles';

// import AppBar and Toolbar
import {MuiAppBar, MuiToolBar} from 'muibase';

// import drawerWith
import {DRAWER_WIDTH, APPBAR_MOBILE, APPBAR_DESKTOP} from './constants';

// styled appBar
export const RootAppBar = styled(MuiAppBar)(({theme}) => ({
  // applies a blur effect to the navbar
  backdropFilter:'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // fixes filter effect on mobile
  backgroundColor:alpha(theme.palette.background.default, 0.72),
  width:'100%',
  [theme.breakpoints.up('lg')]:{
    width: `calc(100% - ${DRAWER_WIDTH - 1}px)`,
  },
}));

// styled toolbar
export const RootToolbar = styled(MuiToolBar)(({theme}) => ({
  minHeight:APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight:APPBAR_DESKTOP,
    padding:theme.spacing(0, 5),
  },
}));
