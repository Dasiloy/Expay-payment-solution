import React from 'react';
import { PageAnimator } from 'components';
import { AuthenticateUser } from 'views/auth';

export default function AuthenticateUserPage () {
  return (
    <PageAnimator>
      <AuthenticateUser />
    </PageAnimator>
  );
}
