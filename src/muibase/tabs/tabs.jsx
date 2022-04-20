import React from 'react';
import PropTypes from 'prop-types';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';

export default function MuiTabs({ children, ...rest }) {
  return <Tabs {...rest}>{children}</Tabs>;
}

MuiTabs.Tab = Tab;
MuiTabs.Tablist = TabList;
MuiTabs.Context = TabContext;
MuiTabs.Panel = TabPanel;

MuiTabs.propType = {
  children: PropTypes.node,
};
