import React from 'react';
import { Hero } from '../components';
import { MuiBox } from 'muibase';
import { TopBarCenter } from '../components';
import RegisterForm from './registerForm';

function RegisterUser () {
  return (
    <MuiBox>
      <TopBarCenter />
      <Hero
        isRegister
        title={'Register your business'}
        text={'Before we proceed, we would like to know more about your business. Kindly fill out the details below'} />
      <RegisterForm />
    </MuiBox>
  );
}

export default RegisterUser;
