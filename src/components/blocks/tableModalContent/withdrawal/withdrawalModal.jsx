import React from 'react';
import PropTypes from 'prop-types';
import { TableModalContent } from 'components/general';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { OutlinedButton, PrimaryButton, StyledSelect } from 'styled';

// withdrawal methods
const withdrawalOptions = [
  {
    label: 'Bank',
    value: 'bank',
  },
  {
    label: 'Card',
    value: 'card',
  },
  {
    label: 'FlutterWave',
    value: 'flutterwave',
  },
];

export default function WithDrawalModal({ value = 0, setValue = () => {} }) {
  return (
    <TableModalContent title={'Withdraw'}>
      <MuiBox>
        <MuiBox marginTop={3}>
          <MuiTextInputField
            onChange={(e) => setValue(+e.target.value)}
            type="text"
            placeholder={'$ amount'}
            label=""
            fullWidth
            value={`$${value}`}
          />
        </MuiBox>
        <MuiBox marginTop={3}>
          <StyledSelect selections={withdrawalOptions} value={value} onChange={setValue} />
        </MuiBox>
        <MuiGrid container marginTop={2} spacing={2}>
          <MuiGrid item xs={12} md={4}>
            <OutlinedButton fullWidth>Cancel</OutlinedButton>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <PrimaryButton fullWidth>Withdraw</PrimaryButton>
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </TableModalContent>
  );
}

WithDrawalModal.propTYpe = {
  activeItemDetails: PropTypes.object,
  value: PropTypes.any,
  setValue: PropTypes.func,
};
