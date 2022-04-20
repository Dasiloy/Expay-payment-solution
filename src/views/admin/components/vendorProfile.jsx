import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBreadcrumbs, MuiBox } from 'muibase';
import { FilterGroup, Table, StatList, VendorProfileHistory } from 'components';
import { vendorProfileStats, VendorProfileTableHeader } from 'constants';
import { HeadingSix } from 'styled';

function VendorProfile({ merchant = {}, reset }) {
  const [active, setActive] = React.useState(false);
  const theme = useTheme();
  return (
    <MuiBox>
      <MuiBreadcrumbs>
        <HeadingSix
          onMouseEnter={() => setActive(true)}
          onMouseLeave={() => setActive(false)}
          color={active ? theme.palette.primary.main : 'text.dashed'}
          style={{ cursor: 'pointer' }}
          onClick={reset}
        >
          {'Transactions'}
        </HeadingSix>
        <HeadingSix color={'text.primary'}>{'View vendor'}</HeadingSix>
      </MuiBreadcrumbs>
      <MuiBox marginY={4} />
      <StatList stats={vendorProfileStats} isThree />
      <MuiBox marginY={8}>
        <FilterGroup title={'action'} />
        <Table
          headData={VendorProfileTableHeader}
          bodyData={merchant?.vendor?.paymentHistory || []}
          label={'firstName'}
        >
          <VendorProfileHistory />
        </Table>
      </MuiBox>
    </MuiBox>
  );
}

VendorProfile.propTypes = {
  merchant: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

export default VendorProfile;
