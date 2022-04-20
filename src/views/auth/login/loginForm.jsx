import React from 'react';
import {useTheme} from '@mui/material';
import { MuiBox } from 'muibase';
import { PrimaryButton, HeadingTwo, HeadingFive, MuiFilledEmailInputField, MuiPasswordField, HeadingSix, TextButton } from 'styled';
import { Divider } from '@mui/material';
import { Container } from 'components';

function LoginForm() {
  const theme = useTheme();
  return (
    <Container noTopPadding>
      <HeadingTwo gutterBottom>Log in</HeadingTwo>
      <HeadingFive color={'text.dashed'} isNotCapitalize>Enter your details below</HeadingFive>
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
            <MuiBox marginBottom={2}>
              <MuiPasswordField fullWidth/>
            </MuiBox>
            <MuiBox  display={'flex'} justifyContent={'flex-end'} marginBottom={1}>
              <TextButton href={'/auth/reset-password'} sx={{fontSize:'0.8rem !important', '&:hover' : {
                background:'transparent',
              }}}>FORGET PASSWORD?</TextButton>
            </MuiBox>
            <PrimaryButton fullWidth href={'/auth/login/authenticate'}>login</PrimaryButton>
            <MuiBox marginBottom={2} marginTop={4}>
              <Divider sx={{color:theme.palette.divider}}/>
            </MuiBox>
            <MuiBox marginBottom={3}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <HeadingSix color={'text.dashed'} sx={{fontSize:'0.75rem !important'}} isNotCapitalize>Don&apos;t hve an account?</HeadingSix>
              <TextButton href={'/auth/signup'} sx={{fontSize:'0.8rem !important', '&:hover' : {
                background:'transparent',
              }}}>SIGN UP</TextButton>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </Container>
  );
}

export default LoginForm;
