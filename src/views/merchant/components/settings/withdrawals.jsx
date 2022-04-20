import React from 'react';
import PropTypes from 'prop-types';
import { MuiBox, MuiGrid } from 'muibase';
import { InputFieldWithIconEnd, SubBody, TextButton, OutlinedButton, PrimaryButton } from 'styled';

// form title to handle form fields across search tabs
import FormTitle from './formtitle';
import { Iconify } from 'components';

function Withdrawals(props) {
  return (
    <FormTitle title="withdrawal methods" subtitle="Your withdrawal details">
      {/* each input fields are stacks*/}
      <MuiGrid container marginBottom={2} alignItems={'center'} sx={{ gridGap: '10px !important' }}>
        <MuiGrid xs={12} md={3}>
          <SubBody color="text.primary" fontSize={'16px !important'}>
            Paypal
          </SubBody>
        </MuiGrid>
        <MuiGrid xs={12} md={8}>
          <InputFieldWithIconEnd
            icon={'logos:paypal'}
            placeholder={'mobuinfo@paypal.gmail'}
            fullWidth
          />
        </MuiGrid>
      </MuiGrid>
      {/* each input fields are stacks*/}
      <MuiGrid container marginBottom={2} alignItems={'center'} sx={{ gridGap: '10px !important' }}>
        <MuiGrid xs={12} md={3}>
          <SubBody color="text.primary" fontSize={'16px !important'}>
            Bank Account
          </SubBody>
        </MuiGrid>
        <MuiGrid xs={12} md={8}>
          <InputFieldWithIconEnd
            icon={'ant-design:bank-twotone'}
            placeholder={'mobuinfo@paypal.gmail'}
            fullWidth
          />
        </MuiGrid>
      </MuiGrid>
      {/* each input fields are stacks*/}
      <MuiGrid container marginBottom={2} alignItems={'center'} sx={{ gridGap: '10px !important' }}>
        <MuiGrid xs={12} md={3} />
        <MuiGrid xs={12} md={8}>
          <InputFieldWithIconEnd placeholder={'908765487'} fullWidth />
        </MuiGrid>
      </MuiGrid>
      {/* each input fields are stacks*/}
      <MuiGrid container marginBottom={4} alignItems={'center'} sx={{ gridGap: '10px !important' }}>
        <MuiGrid xs={12} md={3} />
        <MuiGrid xs={12} md={8}>
          <TextButton
            sx={{ fontSize: '14px !important' }}
            endIcon={<Iconify icon={'akar-icons:circle-plus'} sx={{ width: 15, height: 15 }} />}
          >
            ADD NEW
          </TextButton>
        </MuiGrid>
      </MuiGrid>
      <MuiBox bgcolor="#f1f1f1" width={'100%'} height={'1px'} />
      <MuiGrid container marginTop={2} spacing={2}>
        <MuiGrid item xs={12} md={4}>
          <OutlinedButton fullWidth>Cancel</OutlinedButton>
        </MuiGrid>
        <MuiGrid item xs={12} md={8}>
          <PrimaryButton fullWidth>Save Changes</PrimaryButton>
        </MuiGrid>
      </MuiGrid>
    </FormTitle>
  );
}

Withdrawals.propTypes = {};

export default Withdrawals;
