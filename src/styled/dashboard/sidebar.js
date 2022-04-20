import {styled}  from '@mui/material/styles';
import {DRAWER_WIDTH} from './constants';

const RootSideBar = styled('div')(({theme}) => ({
  width: 'auto',
  [theme.breakpoints.up('lg')]: {
    flexShrink:0,
    width:DRAWER_WIDTH,
  },
}));

export default RootSideBar;
