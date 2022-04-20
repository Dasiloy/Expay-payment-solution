import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { MuiBreadcrumbs, MuiBox } from 'muibase';
import { FilterGroup, Table, MerchantsVendorsTabledata } from 'components';
import { MerchantsVendorsTableHeader } from 'constants';
import { HeadingSix, SubBody } from 'styled';

function Vendorslist({ merchant = {}, reset }) {
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
          {'Merchants'}
        </HeadingSix>
        <HeadingSix color={'text.dashed'}>{merchant.companyName}</HeadingSix>
        <HeadingSix color={'text.primary'}>{'View vendors'}</HeadingSix>
      </MuiBreadcrumbs>
      <MuiBox marginY={8}>
        <FilterGroup title={'vendors'} />
        <Table
          headData={MerchantsVendorsTableHeader}
          bodyData={merchant?.vendors || []}
          label={'firstName'}
        >
          <MerchantsVendorsTabledata />
        </Table>
      </MuiBox>
    </MuiBox>
  );
}

Vendorslist.propTypes = {
  merchant: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};

export default Vendorslist;
