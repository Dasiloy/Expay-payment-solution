import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import { MuiPaper } from 'muibase';
import CssBaseline from '@mui/material/CssBaseline';
// base apex style modified
import { BaseOptionChartStyle } from '../charts/baseConfig';
import getTheme from 'theme';
import { useDarkMode } from 'hooks';
import AOS from 'aos';

export default function Page({ children }) {
  // handles theme moe and changes theme mode
  const [themeMode, themeToggler, mountedComponent] = useDarkMode();

  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }

    AOS.init({
      once: true,
      delay: 0,
      duration: 800,
      offset: 0,
      easing: 'ease-in-out',
    });
  }, []);

  // re-initialize aos on re-renders and theme mode changes
  useEffect(() => {
    AOS.refresh();
  }, [mountedComponent, themeMode]);

  return (
    <ThemeProvider theme={getTheme(themeMode, themeToggler)}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <BaseOptionChartStyle />
      <MuiPaper elevation={0}>{children}</MuiPaper>
    </ThemeProvider>
  );
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
};
