import React from 'react';
import { PageAnimator } from 'components';
import { RegisterUser } from 'views/auth';

export default function RegisterPage () {
  return (
    <PageAnimator>
      <RegisterUser />
    </PageAnimator>
  );
}
