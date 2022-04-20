import React from 'react';
import {
  HeadingThree,
  MuiTextArea,
  TabsWithContext,
  StyledSelect,
  PrimaryButton,
  MuiStyledAccordion,
  SubBody,
  HeadingFour,
} from 'styled';
import { MuiBox, MuiGrid, MuiIconButton } from 'muibase';
import { Iconify } from 'components';

// category for contact
const categoryList = [
  {
    key: '1',
    label: 'Account',
    value: 'account',
  },
  {
    key: '2',
    label: 'Payment',
    value: 'payment',
  },
  {
    key: '3',
    label: 'vendor',
    value: 'vendor',
  },
  {
    key: '4',
    label: 'Client',
    value: 'client',
  },
];

// mock fqlist
const fqList = [
  {
    accordionSummary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.',
    accordionDetails:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.consectetur adipisicing elit. Placeat, voluptatem.',
  },
  {
    accordionSummary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.',
    accordionDetails:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.consectetur adipisicing elit. Placeat, voluptatem.',
  },
  {
    accordionSummary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.',
    accordionDetails:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.consectetur adipisicing elit. Placeat, voluptatem.',
  },
  {
    accordionSummary:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.',
    accordionDetails:
      ' Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat, voluptatem.consectetur adipisicing elit. Placeat, voluptatem.',
  },
];

// unselected tab
const UnSelectedTab = () => (
  <MuiBox
    display={'flex'}
    alignItems={'center'}
    justifyContent={'center'}
    sx={{ minHeight: '100%' }}
    marginTop={{ xs: 8, md: 0 }}
    data-aos={'fade-in'}
  >
    <MuiBox>
      <MuiBox marginBottom={1} mx={'auto'} textAlign={'center'}>
        <MuiIconButton color={'dashed'} aria-label="upload picture" component="span">
          <Iconify
            icon="carbon:help-filled"
            sx={{
              width: '70px',
              height: '70px',
            }}
          />
        </MuiIconButton>
      </MuiBox>
      <HeadingFour textAlign="center !important" gutterBottom>
        choose a category
      </HeadingFour>
      <SubBody
        textAlign="center !important"
        color="text.dashed"
        maxWidth={{ xs: '100%', md: '60%' }}
        mx={'auto'}
        fontSize={'16px !important'}
      >
        Select a category on the left menu to learn more or ask a question using the search bar{' '}
      </SubBody>
    </MuiBox>
  </MuiBox>
);

// basic tab content
const TabContent = ({ title = '', width = 6, children }) => {
  return (
    <MuiBox data-aos={'fade-in'}>
      <HeadingThree gutterBottom>{title}</HeadingThree>
      <MuiGrid container sx={{ marginTop: 5 }}>
        <MuiGrid item xs={12} md={width}>
          {children}
        </MuiGrid>
      </MuiGrid>
    </MuiBox>
  );
};

// contact tab
const ContactTab = () => {
  const [value, setValue] = React.useState('');
  return (
    <TabContent title="Contact" width={7}>
      <>
        <StyledSelect
          label={'Select a category'}
          selections={categoryList}
          value={value}
          onChange={setValue}
        />
        <MuiBox marginTop={3}>
          <MuiTextArea rows={4} placeholder={'Describe your issue'} />
        </MuiBox>
        <MuiBox marginTop={3}>
          <PrimaryButton fullWidth>Submit</PrimaryButton>
        </MuiBox>
      </>
    </TabContent>
  );
};

// other tabs
const OtherTab = ({ title = '', fqList = [] }) => {
  return (
    <TabContent title={title} width={9}>
      <>
        <MuiStyledAccordion accordionList={fqList} />
      </>
    </TabContent>
  );
};

const tablist = [
  {
    key: '1',
    label: 'Account',
    value: 'account',
    render: () => <OtherTab title={'Account'} fqList={fqList} />,
  },
  {
    key: '2',
    label: 'Payment',
    value: 'payment',
    render: () => <OtherTab title={'Payment'} fqList={fqList} />,
  },
  {
    key: '3',
    label: 'Vendor',
    value: 'vendor',
    render: () => <OtherTab title={'Vendor'} fqList={fqList} />,
  },
  {
    key: '4',
    label: 'Client',
    value: 'client',
    render: () => <OtherTab title={'Client'} fqList={fqList} />,
  },
  {
    key: '5',
    label: 'Contact us',
    value: 'contact',
    render: () => <ContactTab />,
  },
];

export default function HelpTads() {
  const [value, setValue] = React.useState('');
  const handleChange = (_event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabsWithContext tablist={tablist} value={value} handleChange={handleChange}>
      <UnSelectedTab />
    </TabsWithContext>
  );
}
