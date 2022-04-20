import React from 'react';
import MDashboard from './components';
import { WidgetGroup, FilterGroup, Table, TransactionTableBody } from 'components';
import { MuiBox, MuiDivider } from 'muibase';
import { subscriptionList, subscriptionsTableHeader, subscriptionWidgets } from 'constants';

export default function SubscriptionsWrapper() {
  return (
    <MDashboard title={'Subscriptions'}>
      <WidgetGroup widgets={subscriptionWidgets} />
      <MuiBox marginY={3}>
        <MuiDivider />
      </MuiBox>
      <FilterGroup title={'Subscriptions'} />
      <Table headData={subscriptionsTableHeader} bodyData={subscriptionList} label={'receiver'}>
        <TransactionTableBody />
      </Table>
    </MDashboard>
  );
}
