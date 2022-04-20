import React from 'react';
import { AuthGroup } from '../components';
import ResetPasswordForm from './resetPasswordForm.jsx';

function ResetPassword() {

  return (
    <AuthGroup>
      <ResetPasswordForm />
    </AuthGroup>
  );
}

export default ResetPassword;
