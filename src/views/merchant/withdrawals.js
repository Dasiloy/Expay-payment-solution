import React from 'react';
import MDashboard from './components';
import { WidgetGroup, FilterGroup, Table, WithdrawalTableBody } from 'components';
import { MuiBox, MuiDivider } from 'muibase';
import { withdrawalWidgets, WithdrawalHeader, withdrawalList } from 'constants';

export default function WithdrawalsWrapper() {
  // state control for withdrawal modal
  const [openWithDrawal, setWithdrawal] = React.useState(false);
  // open withdrawal modal
  const openWithDrawalModal = () => setWithdrawal(true);
  // close withdrawal modal
  const closeWithdrawalModal = () => setWithdrawal(false);
  return (
    <MDashboard title={'Withdrawals'} isExtra isWithdrawal openWithdrawal={openWithDrawalModal}>
      <WidgetGroup widgets={withdrawalWidgets} />
      <MuiBox marginY={3}>
        <MuiDivider />
      </MuiBox>
      <FilterGroup title={'Withdrawals'} />
      <Table headData={WithdrawalHeader} bodyData={withdrawalList} label={'status'}>
        <WithdrawalTableBody
          closeWithdrawalModal={closeWithdrawalModal}
          isWithdrawalModalOpen={openWithDrawal}
        />
      </Table>
    </MDashboard>
  );
}
