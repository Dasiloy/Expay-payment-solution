import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { TableModalContent } from 'components/general';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { OutlinedButton, PrimaryButton, SubBody, TextButton } from 'styled';

export default function RefundPayment({ activeItemDetails = {}, ...rest }) {
  const theme = useTheme();
  return (
    <TableModalContent {...rest} title={'Refund Payment'}>
      <MuiBox>
        <MuiBox
          sx={{
            paddingX: { xs: 2 },
            paddingTop: 3,
            paddingBottom: 2,
            borderRadius: '10px 10px 10px 10px',
          }}
          bgcolor={theme.palette.mode === 'light' ? '#FAFAFA' : '#0a0a0a'}
        >
          <SubBody
            gutterBottom
            marginBottom={2}
            color={'text.dashed'}
            style={{ fontSize: '16px', lineHeight: '26px' }}
          >
            Refunds take 5-10 days to appear on the customers statement. Fees for the original
            payment won’t be returned but there won’t be additional fees for the refund.
          </SubBody>
          <TextButton color="primary">LEARN MORE</TextButton>
        </MuiBox>
        <MuiBox marginTop={3}>
          <MuiTextInputField
            type="text"
            placeholder={'$ amount'}
            label=""
            fullWidth
            value={`$${activeItemDetails.amount}`}
          />
        </MuiBox>
        <MuiBox marginTop={3}>
          <MuiTextInputField type="text" placeholder={'Reason'} label="" fullWidth />
        </MuiBox>
        <MuiGrid container marginTop={2} spacing={2}>
          <MuiGrid item xs={12} md={4}>
            <OutlinedButton fullWidth>Cancel</OutlinedButton>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <PrimaryButton fullWidth>Refund</PrimaryButton>
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </TableModalContent>
  );
}

RefundPayment.propTYpe = {
  activeItemDetails: PropTypes.object,
};
