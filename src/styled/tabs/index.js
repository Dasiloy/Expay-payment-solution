import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { MuiTabs, MuiBox } from 'muibase';
import Scrollbar from 'layouts/dashboard/components/sidebar/scrollbar';

// create props object
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

// styled tab
const StyledTab = styled((props) => <MuiTabs.Tab disableRipple {...props} />)(({ theme }) => ({
  textTransform: 'capitalize',
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(15),
  padding: theme.spacing(3, 4, 3, 0),
}));

// custom tabpanel
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <MuiBox sx={{ p: 3 }}>{children}</MuiBox>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <MuiBox sx={{ width: '100%', display: isMd ? 'flex' : 'block' }}>
      <MuiBox
        sx={{
          borderBottom: isMd ? 0 : 1,
          borderColor: '#EEEEEE !important',
          borderRight: isMd ? 1 : 0,
        }}
      >
        <MuiTabs
          value={value}
          onChange={handleChange}
          orientation={isMd ? 'vertical' : 'horizontal'}
          variant={isMd ? '' : 'scrollable'}
          scrollButtons={isMd ? false : 'auto'}
          aria-label="basic tabs example"
          textColor="primary"
          indicatorColor="primary"
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
        </MuiTabs>
      </MuiBox>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </MuiBox>
  );
}

export function TabsWithContext({ tablist = [], value = '', handleChange = () => {}, children }) {
  const { Tablist, Context, Panel } = MuiTabs;
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });
  return (
    <MuiBox sx={{ width: '100%', display: isMd ? 'flex' : 'block' }}>
      <Context value={value}>
        <MuiBox
          sx={{
            borderBottom: isMd ? 0 : 1,
            borderColor: '#EEEEEE !important',
            borderRight: isMd ? 1 : 0,
          }}
        >
          <Tablist
            onChange={handleChange}
            aria-label="help tabs"
            orientation={isMd ? 'vertical' : 'horizontal'}
            variant={isMd ? 'standard' : 'scrollable'}
            scrollButtons={isMd ? false : 'auto'}
            textColor="primary"
            indicatorColor={'primary'}
          >
            {tablist.length > 0 && tablist.map((item) => <StyledTab {...item} />)}
          </Tablist>
        </MuiBox>
        {children && (
          <Panel value="" sx={{ minWidth: '80%' }}>
            <Scrollbar style={{ maxHeight: '100%' }}>{children}</Scrollbar>
          </Panel>
        )}
        {tablist.length > 0 &&
          tablist.map((Item) => (
            <Panel
              {...Item}
              sx={{ minWidth: '80%', padding: isMd ? '18px 0 0 48px' : '48px 0 0 10px' }}
            >
              <Scrollbar style={{ maxHeight: '100%' }}>
                <Item.render />
              </Scrollbar>
            </Panel>
          ))}
      </Context>
    </MuiBox>
  );
}

export function HorizontalTabsWithContext({
  tablist = [],
  value = '',
  handleChange = () => {},
  children,
}) {
  const { Tablist, Context, Panel } = MuiTabs;

  return (
    <MuiBox sx={{ width: '100%' }}>
      <Context value={value}>
        <MuiBox
          sx={{
            borderBottom: 0.01,
            borderColor: '#EEEEEE !important',
          }}
        >
          <Tablist
            onChange={handleChange}
            aria-label="help tabs"
            orientation={'horizontal'}
            variant={'scrollable'}
            scrollButtons={'auto'}
            textColor="primary"
            indicatorColor={'primary'}
          >
            {tablist.length > 0 && tablist.map((item) => <StyledTab {...item} />)}
          </Tablist>
        </MuiBox>
        {children && (
          <Panel value="" sx={{ minWidth: '80%' }}>
            <Scrollbar style={{ maxHeight: '100%' }}>{children}</Scrollbar>
          </Panel>
        )}
        {tablist.length > 0 &&
          tablist.map((Item) => (
            <Panel {...Item} sx={{ minWidth: '80%', padding: '36px 0 0 0px' }}>
              <Scrollbar style={{ maxHeight: '100%' }}>
                <Item.render />
              </Scrollbar>
            </Panel>
          ))}
      </Context>
    </MuiBox>
  );
}
