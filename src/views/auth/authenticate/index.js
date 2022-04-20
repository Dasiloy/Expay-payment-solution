import { MuiBox } from 'muibase';
import React from 'react';
import { Hero, TopBarCenter } from '../components';
import AuthForm from './authForm';

function AuthenticateUser() {
  return (
    <MuiBox>
      <TopBarCenter />
      <Hero
        title={'Authentication required'}
        text={
          'Let’s confirm it’s you. We  just sent a code to your email, kindly check your email and enter the code below'
        }
      />
      <AuthForm />
    </MuiBox>
  );
}

export default AuthenticateUser;
