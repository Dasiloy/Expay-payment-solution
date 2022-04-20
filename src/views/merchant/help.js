import React from 'react';
import MDashboard from './components';
import HelpTads from './components/helptabs';
import { DefaultSearchBar } from 'styled';
import { MuiBox } from 'muibase';

export default function HelpWrapper() {
  const [search, setSearch] = React.useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <MDashboard title={'help & Support'}>
      <DefaultSearchBar
        placeholder="Search issues, keywords or ask a question"
        fullWidth
        value={search}
        onChange={handleSearch}
      />
      <MuiBox sx={{ marginY: 10 }}>
        <HelpTads />
      </MuiBox>
    </MDashboard>
  );
}
