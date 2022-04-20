import React from 'react';
import { AuthGroup } from '../components';
import LoginForm from './loginForm';

function Login() {
  return (
    <AuthGroup>
      <LoginForm />
    </AuthGroup>
  );
}

export default Login;
