import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { TableModalContent } from 'components/general';
import { MuiBox } from 'muibase';
import { SubBody, HeadingSix } from 'styled';

export default function RefundPayment({ activeItemDetails = {}, ...rest }) {
  const theme = useTheme();
  return (
    <TableModalContent {...rest} title={'Transaction Details'}>
      <MuiBox
        sx={{
          paddingX: { xs: 2, md: 3 },
          paddingY: 2,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius: '10px 10px 1px 0px',
        }}
        bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : 'transparent'}
      >
        <MuiBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <HeadingSix>Order amount</HeadingSix>
          <SubBody>&#8358; {activeItemDetails.amount}</SubBody>
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          paddingX: { xs: 2, md: 3 },
          paddingY: 2,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
        }}
        bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : 'transparent'}
      >
        <MuiBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <HeadingSix>Transaction fees ({`${activeItemDetails.percent}%`})</HeadingSix>
          <SubBody>&#8358; {activeItemDetails.commission}</SubBody>
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          paddingX: { xs: 2, md: 3 },
          paddingY: 2,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
        }}
        bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : 'transparent'}
      >
        <MuiBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <HeadingSix>Payment method</HeadingSix>
          <SubBody style={{ textTransform: 'uppercase' }}>{activeItemDetails.method}</SubBody>
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          paddingX: { xs: 2, md: 3 },
          paddingY: 2,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
        }}
        bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : 'transparent'}
      >
        <MuiBox
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          sx={{ width: '100%' }}
        >
          <HeadingSix>Transaction ID</HeadingSix>
          <SubBody>{activeItemDetails.id && activeItemDetails.id.substring(0, 20)}</SubBody>
        </MuiBox>
      </MuiBox>
      <MuiBox
        sx={{
          paddingX: { xs: 2, md: 3 },
          paddingY: 2,
          borderBottom: '1px solid',
          borderColor: theme.palette.divider,
          borderRadius: '0 0 10px 10px',
        }}
        bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : 'transparent'}
      >
        <MuiBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
          <HeadingSix>Date</HeadingSix>
          <SubBody> {new Date(activeItemDetails.date).toLocaleDateString()}</SubBody>
        </MuiBox>
      </MuiBox>
    </TableModalContent>
  );
}

RefundPayment.propTYpe = {
  activeItemDetails: PropTypes.object,
};
