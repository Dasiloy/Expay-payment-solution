import { styled } from '@mui/material/styles';
import { APP_BAR_MOBILE, APP_BAR_DESKTOP } from './constants';

// dashboard content
const Content = styled('div')(({ theme }) => ({
  flexGrow: 1,
  minHeight: '100%',
  overflow: 'auto',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  backgroundColor:
    theme.palette.mode === 'light' ? theme.palette.alternate.light : theme.palette.background.paper,
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP + 24,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

export default Content;
