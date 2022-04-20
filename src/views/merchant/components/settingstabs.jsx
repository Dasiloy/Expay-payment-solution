import React from 'react';
import { MuiBox } from 'muibase';
import { HorizontalTabsWithContext, HeadingThree } from 'styled';

// import settings tabs
import { Withdrawals, Admin, Account } from './settings';

// basic tab content
const TabContent = ({ title = '', children }) => {
  return (
    <MuiBox data-aos={'fade-in'}>
      <HeadingThree gutterBottom>{title}</HeadingThree>
      <MuiBox container sx={{ marginTop: { xs: 4, lg: 6 }, paddingLeft: { xs: 5, lg: 8 } }}>
        {children}
      </MuiBox>
    </MuiBox>
  );
};

const tablist = [
  {
    key: '1',
    label: 'Account',
    value: 'account',
    render: () => (
      <TabContent title="Account">
        <Account />
      </TabContent>
    ),
  },
  {
    key: '2',
    label: 'Payments',
    value: 'payments',
    render: () => <TabContent title="Payment" />,
  },
  {
    key: '3',
    label: 'Withdrawals',
    value: 'withdrawals',
    render: () => (
      <TabContent title="Withdrawals">
        <Withdrawals />
      </TabContent>
    ),
  },
  {
    key: '4',
    label: 'Admins',
    value: 'admins',
    render: () => (
      <TabContent title="Admins">
        <Admin />
      </TabContent>
    ),
  },
];

export default function SettingsTab() {
  const [value, setValue] = React.useState('account');
  const handleChange = (_event, newValue) => {
    setValue(newValue);
    // if (typeof window === 'undefined') {
    //   return;
    // }
    // window.scrollTo({
    //   top: 0,
    //   behavior: 'smooth',
    // });
  };
  return <HorizontalTabsWithContext value={value} handleChange={handleChange} tablist={tablist} />;
}
