import React from 'react';
import MDashboard from './components';
import { WidgetGroup, FilterGroup, Table, TransactionTableBody } from 'components';
import { MuiBox, MuiDivider } from 'muibase';
import { transactionsTableHeader, transactionList, transactionWidgets } from 'constants';

export default function TransactionsWrapper() {
  return (
    <MDashboard title={'Transactions'}>
      <WidgetGroup widgets={transactionWidgets} />
      <MuiBox marginY={3}>
        <MuiDivider />
      </MuiBox>
      <FilterGroup title={'Transactions'} />
      <Table headData={transactionsTableHeader} bodyData={transactionList} label={'receiver'}>
        <TransactionTableBody />
      </Table>
    </MDashboard>
  );
}
