import React from 'react';
import PropTypes from 'prop-types';
import {
  TableModalContent,
  Label,
  StatList,
  Table,
  PaymentHistoryTableData,
  FilterGroup,
} from 'components';
import { MerchantsTableHeaderWithPayment } from 'constants';
import { MuiBox } from 'muibase';

export default function PaymentModalContent({ activeItemDetails = {}, ...rest }) {
  const statsList = [
    {
      title: 'Balance',
      value: `$${activeItemDetails.wallet.balance}`,
      icon: 'fluent:building-bank-16-filled',
    },
    {
      title: 'Total received',
      value: `$${activeItemDetails.wallet.totalAmountReceived}`,
      icon: 'fluent:building-bank-16-filled',
    },
    {
      title: 'Total Payouts',
      value: `$${activeItemDetails.wallet.totalPayouts}`,
      icon: 'fluent:building-bank-16-filled',
    },
  ];
  return (
    <TableModalContent {...rest} title={'Payment History'}>
      <MuiBox marginBottom={5}>
        <Label color="primary" variant="outlined">
          {activeItemDetails.companyName}
        </Label>
        <MuiBox marginBottom={4} />
        <StatList stats={statsList} isThree />
      </MuiBox>
      <FilterGroup title={'Actions'} />
      <Table
        headData={MerchantsTableHeaderWithPayment}
        bodyData={activeItemDetails.paymentHistory}
        label={'companyName'}
      >
        <PaymentHistoryTableData />
      </Table>
    </TableModalContent>
  );
}

PaymentModalContent.propTYpe = {
  activeItemDetails: PropTypes.object,
};
