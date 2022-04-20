import React from 'react';
import {useTheme} from '@mui/material';
import { MuiBox, MuiGrid, MuiInput } from 'muibase';
import { PrimaryButton, HeadingTwo, HeadingFive, MuiFilledEmailInputField, MuiPasswordField, HeadingSix, TextButton } from 'styled';
import { Divider } from '@mui/material';
import { Container } from 'components';
import { MuiTextInputField } from 'styled/inputs';

function SignUpForm() {
  const theme = useTheme();
  return (
    <Container noTopPadding>
      <HeadingTwo gutterBottom>Sign up</HeadingTwo>
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
            <MuiGrid spacing={4} container>
              <MuiGrid xs={12} md={6} item>
                <MuiBox marginBottom={2}>
                  <MuiTextInputField  placeholder={'enter first name'} label={'First Name'} variant='filled'/>
                </MuiBox>
              </MuiGrid >
              <MuiGrid xs={12} md={6} item>
                <MuiBox marginBottom={2}>
                  <MuiTextInputField placeholder={'enter last name'} label={'Last Name'} />
                </MuiBox>
              </MuiGrid>
            </MuiGrid>
            <MuiBox marginBottom={2}>
              <MuiBox marginBottom={2}>
                <MuiTextInputField placeholder={'enter email'} label={'Email'} />
              </MuiBox>
            </MuiBox>
            <MuiBox marginBottom={2}>
              <MuiPasswordField fullWidth/>
            </MuiBox>
            <MuiBox marginBottom={2}>
              <MuiPasswordField fullWidth label={'Confirm Password'}/>
            </MuiBox>
            <PrimaryButton fullWidth href={'/auth/signup/register'}>Sign up</PrimaryButton>
            <MuiBox marginBottom={2} marginTop={4}>
              <Divider sx={{color:theme.palette.divider}}/>
            </MuiBox>
            <MuiBox marginBottom={3}  display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
              <HeadingSix color={'text.dashed'} sx={{fontSize:'0.75rem !important'}} isNotCapitalize>Registered already?</HeadingSix>
              <TextButton href={'/auth/login'} sx={{fontSize:'0.8rem !important', '&:hover' : {
                background:'transparent',
              }}}>LOG IN</TextButton>
            </MuiBox>
          </MuiBox>
        </MuiBox>
      </MuiBox>
    </Container>
  );
}

export default SignUpForm;
