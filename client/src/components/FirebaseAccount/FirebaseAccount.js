import React from 'react';
import AuthUserContext from '../FirebaseAuthUserContext';
import { PasswordForgetForm } from '../FirebasePasswordForget';
import PasswordChangeForm from '../FirebasePasswordReset';
import withAuthorization from '../FirebaseWithAuthorization';
import UserProfilePhoto from '../UserProfilePhoto'
import "./FirebaseAccount.css";

const FirebaseAccount = () =>
<AuthUserContext.Consumer>
{authUser =>
  <div className='container-fluid'>
    <h1>Account: {authUser.email}</h1>
    <div className='row'>
      <div className='col-md-6 col-xs-12'>
        <UserProfilePhoto artistFirebaseIDfromParent={authUser.uid}/>
      </div>
      <div className='col-md-6 col-xs-12 accountForms'>
        <div className='row'>
            <PasswordForgetForm />
        </div>
        <div className='row'>
          <PasswordChangeForm />
        </div>
      </div>
    </div>
  </div>
}
</AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(FirebaseAccount);
// export default FirebaseAccount;