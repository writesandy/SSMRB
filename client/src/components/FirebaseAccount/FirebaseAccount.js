import React from 'react';
import AuthUserContext from '../FirebaseAuthUserContext';
import { PasswordForgetForm } from '../FirebasePasswordForget';
import PasswordChangeForm from '../FirebasePasswordReset';
import withAuthorization from '../FirebaseWithAuthorization';
import UserProfilePhoto from '../UserProfilePhoto'

const FirebaseAccount = () =>
<AuthUserContext.Consumer>
{authUser =>
  <div>
    <h1>Account: {authUser.email}</h1>
    {/* <UserProfilePhoto /> */}
    <UserProfilePhoto artistFirebaseIDfromParent={authUser.uid}/>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>
}
</AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(FirebaseAccount);
// export default FirebaseAccount;