import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
// import ReactModal from 'react-modal';

import { SignUpLink } from '../FirebaseSignUp';
import { PasswordForgetLink } from '../FirebasePasswordForget'
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const FirebaseSignIn = ({ history }) =>
  <div>
    <h1>SignIn</h1>
    <FirebaseSignInForm history={history} />
    <PasswordForgetLink />
    <SignUpLink />
  </div>

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class FirebaseSignInForm extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };

    // //Modal
    // this.handleOpenModal = this.handleOpenModal.bind(this);
    // this.handleCloseModal = this.handleCloseModal.bind(this);
    // this.handleSignUp = this.handleSignUp.bind(this);
    // this.handleSignIn = this.handleSignIn.bind(this);

  }

  handleSignIn = () => {
    window.location.assign('/account');
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      })
      .then (() => {
        this.handleSignIn();
      })

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(byPropKey('password', event.target.value))}
          type="password"
          placeholder="Password"
        />
        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default withRouter(FirebaseSignIn);

export {
  FirebaseSignInForm,
};