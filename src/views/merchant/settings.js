import React from 'react';
import MDashboard from './components';
import SettingsTab from './components/settingstabs';

export default function SettingsWrapper() {
  return (
    <MDashboard title={'Settings'}>
      <SettingsTab />
    </MDashboard>
  );
}
