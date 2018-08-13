import React from 'react';
import AuthUserContext from '../FirebaseAuthUserContext';
import { PasswordForgetForm } from '../FirebasePasswordForget';
import PasswordChangeForm from '../FirebasePasswordReset';

const FirebaseAccount = () =>
<AuthUserContext.Consumer>
{authUser =>
  <div>
    <h1>Account: {authUser.email}</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
}
</AuthUserContext.Consumer>

export default FirebaseAccount;