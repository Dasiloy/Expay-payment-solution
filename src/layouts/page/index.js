import React, {useState} from 'react';
import PropTypes from 'prop-types';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useMediaQuery } from '@mui/material';
import {useTheme} from '@mui/material/styles';
import { MuiAppBar } from 'muibase';
import {Navbar, Sidebar, Footer} from './components';
import navLinks, {support} from './navigation';

export default function PageLayout ({ bgcolor = 'transparent', children}) {
  const theme = useTheme();
  const isLg = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches:true,
  });

  // scroll trigger to scroll navbar
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });

  // state value to open sidebar
  const [openSidebar, setOpenSidebar] = useState(false);

  // open sidebar
  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  // close sidebar
  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  // control drawer for sidebar across screen sizes
  const open = isLg ? false : openSidebar;

  return <>
    <MuiAppBar
      position={'sticky'}
      sx={{
        top: 0,
        backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
      }}
      elevation={trigger ? 1 : 0}
    >
      <Navbar trigger={trigger} navLinks={navLinks}   onSidebarOpen={handleSidebarOpen}/>
    </MuiAppBar>
    {children}
    <Sidebar
      onClose={handleSidebarClose}
      open={open}
      variant="temporary"
      links={navLinks}
    />
    <Footer  links={navLinks} support={support}/>
  </>;
}

PageLayout.propType = {
  bgcolor:PropTypes.string,
  children:PropTypes.node,
};
