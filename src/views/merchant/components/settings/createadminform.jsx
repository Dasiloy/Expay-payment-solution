import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import { TableModalContent } from 'components/general';
import { MuiBox, MuiGrid } from 'muibase';
import { MuiTextInputField } from 'styled/inputs';
import { OutlinedButton, PrimaryButton, SubBody, TextButton } from 'styled';

// permissions checklist
import Permissions from './permissions';

export default function CreateAdmin({
  activeItemDetails = {},
  handleUpdate = () => {},
  handlePermits = () => {},
  onClose = () => {},
  onFinish = () => {},
  loading = false,
  ...rest
}) {
  const theme = useTheme();

  return (
    <TableModalContent {...rest} title={'Create Admin'}>
      <MuiBox>
        <MuiBox marginTop={3}>
          <MuiTextInputField
            size="small"
            type="text"
            placeholder={'Enter email'}
            label=""
            fullWidth
            name={'email'}
            onChange={handleUpdate}
            value={`${activeItemDetails.email || ''}`}
          />
        </MuiBox>
        <MuiBox marginY={3}>
          <MuiTextInputField
            size="small"
            type="text"
            placeholder={'Enter title'}
            label=""
            fullWidth
            name={'title'}
            onChange={handleUpdate}
            value={`${activeItemDetails.title || ''}`}
          />
        </MuiBox>
        <Permissions activeItemDetails={activeItemDetails} handlePermits={handlePermits} />
        <MuiGrid container marginTop={3} spacing={2}>
          <MuiGrid item xs={12} md={4}>
            <OutlinedButton fullWidth onClick={onClose}>
              Cancel
            </OutlinedButton>
          </MuiGrid>
          <MuiGrid item xs={12} md={8}>
            <PrimaryButton loadingButton loading={loading} fullWidth onClick={onFinish}>
              Save
            </PrimaryButton>
          </MuiGrid>
        </MuiGrid>
      </MuiBox>
    </TableModalContent>
  );
}
CreateAdmin.propTYpe = {
  activeItemDetails: PropTypes.object,
};
