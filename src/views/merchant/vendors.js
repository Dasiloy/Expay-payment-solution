import React from 'react';
import MDashboard from './components';
import { WidgetGroup, FilterGroup, Table, VendorTableBody } from 'components';
import { MuiBox, MuiDivider } from 'muibase';
import { VENDORS, VendorsTableHeader, vendorWidgets } from 'constants';

export default function VendorsWrapper() {
  return (
    <MDashboard title={'Vendors'}>
      <WidgetGroup widgets={vendorWidgets} />
      <MuiBox marginY={3}>
        <MuiDivider />
      </MuiBox>
      <FilterGroup title={'Vendors'} />
      <Table headData={VendorsTableHeader} bodyData={VENDORS} label={'name'}>
        <VendorTableBody />
      </Table>
    </MDashboard>
  );
}
