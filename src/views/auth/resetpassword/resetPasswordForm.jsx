import React from 'react';
import {FaArrowLeft} from 'react-icons/fa';
import {useTheme} from '@mui/material';
import { MuiBox } from 'muibase';
import { PrimaryButton, HeadingTwo, MuiFilledEmailInputField, TextButton} from 'styled';
import { Container } from 'components';

function ResetPasswordForm() {
  const theme = useTheme();
  return (
    <Container noTopPadding>
      <HeadingTwo gutterBottom>Reset Password</HeadingTwo>
      <MuiBox marginY={4}>
        <MuiBox marginX={'auto'}>
          <MuiBox
            width={1}
            component="form"
            sx={{
              '& .MuiTextField-root': { width: '100%' },
            }}
            noValidate
            autoComplete="off"
          >
            <MuiBox marginBottom={3}>
              <MuiFilledEmailInputField   label="Email" placeholder={'Enter email'} fullWidth />
            </MuiBox>
            <PrimaryButton fullWidth>Reset password</PrimaryButton>
            <MuiBox marginY={2}>
              <TextButton href={'/auth/login'} sx={{ '&:hover' : {
                background:'transparent',
              }}}  startIcon={
                <FaArrowLeft style={{
                  fontSize:'0.9rem',
                }}/>
              }>Back</TextButton>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </Container>
  );
}

export default ResetPasswordForm;
