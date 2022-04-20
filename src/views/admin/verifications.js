import React from 'react';
import ADashboard from './components';
import Topbar from './components/topbar';
import StatList from './components/statlist';
import { MuiBox } from 'muibase';
import { FilterGroup, Table, VerificationTableData } from 'components';
import { merchantList, MerchantsTableHeader, merchantsStats } from 'constants';
export default function ADashboardPageV() {
  return (
    <ADashboard>
      <Topbar title={'Verifications'} />
      <StatList stats={merchantsStats} />
      <MuiBox marginY={8} />
      <FilterGroup title={'Latest'} />
      <Table headData={MerchantsTableHeader} bodyData={merchantList} label={'companyName'}>
        <VerificationTableData />
      </Table>
    </ADashboard>
  );
}
