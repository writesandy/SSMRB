import React, { PureComponent } from 'react';
import 'whatwg-fetch';
import ReactModal from 'react-modal';
import PinkPhoto from './pexels-photo-1111367.jpeg'
import './SignIn.css';

import {
  getFromStorage,
  setInStorage,
} from '../../utils/storage';

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signUpError: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      signUpEmail: '',
      signUpPassword: '',
      //for modal
      showModal: false
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
    this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.onSignUp = this.onSignUp.bind(this);
    this.logout = this.logout.bind(this);

    //for modal
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);

  }

//make the above into a fat arrow function 
// bindThis => (this){

// }




  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      console.log('token', token)
      // Verify token
      console.log ("obj:", obj);
      console.log("token", token);
      fetch('/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          
          if (json.success) {
            this.setState({
              token,
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        }).catch(err=>{
          console.log(err)
        })
      } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  onTextboxChangeSignInEmail(event) {
    this.setState({
      signInEmail: event.target.value,
    });
  }

  onTextboxChangeSignInPassword(event) {
    this.setState({
      signInPassword: event.target.value,
    });
  }

  onTextboxChangeSignUpEmail(event) {
    this.setState({
      signUpEmail: event.target.value,
    });
  }

  onTextboxChangeSignUpPassword(event) {
    this.setState({
      signUpPassword: event.target.value,
    });
  }

  onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'// this also could be json data
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
      })
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  onSignIn() {
    // Grab state
    const {
      signInEmail,
      signInPassword,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: signInEmail,
        password: signInPassword,
      }),
    }).then(res => res.json())
      .then(json => {
        if (json.success) {
          setInStorage('the_main_app', { token: json.token });
          this.setState({
            signInError: json.message,
            isLoading: false,
            signInPassword: '',
            signInEmail: '',
            token: json.token,
          });
        } else {
          this.setState({
            signInError: json.message,
            isLoading: false,
          });
        }
      });
  }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      fetch('/api/account/logout?token=' + token)
        .then(res => res.json())
        .then(json => {
          if (json.success) {
            this.setState({
              token: '',
              isLoading: false
            });
          } else {
            this.setState({
              isLoading: false,
            });
          }
        });
    } else {
      this.setState({
        isLoading: false,
      });
    }
  }

  //Functions that Open/Close modal
    handleOpenModal (art, e) {
      this.setState({ showModal: true });
    }
    
    handleCloseModal () {
    this.setState({ showModal: false });
    };

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
      signUpEmail,
      signUpPassword,
      signUpError,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {

      //Add specific class to ReactModal

      return (
        <a className="navbar-brand login" href="#" onClick={this.handleOpenModal}>Login

        <ReactModal isOpen={this.state.showModal}>
          <span class = 'sign-in-page'>
                <img class='modalImage' src="https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt={'pink-styling'}/>
                
                <div class='modalFields col-12  col-xs-12 col-sm-12 col-md-6'>
                  <div>
                    {
                      (signInError) ? (
                        <p>{signInError}</p>
                      ) : (null)
                    }
                    <h3></h3>
                    <input
                      className="signInUpInput"
                      type="email"
                      placeholder="Email"
                      value={signInEmail}
                      onChange={this.onTextboxChangeSignInEmail}
                    />
                    <br />
                    <input
                      className="signInUpInput"
                      type="password"
                      placeholder="Password"
                      value={signInPassword}
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                    <br />
                    <button type='button' class='btn btn-primary' onClick={this.onSignIn}>Sign In</button>
                  </div>
                  <br />
                  <br />
                  <div>
                
                    {
                      (signUpError) ? (
                        <p>{signUpError}</p>
                      ) : (null)
                    }
                    <h3>Not Yet a Member?<br></br>Sign Up</h3>
                    <input
                      className="signInUpInput"
                      type="email"
                      placeholder="Email"
                      value={signUpEmail}
                      onChange={this.onTextboxChangeSignUpEmail}
                    /><br />
                    <input
                      className="signInUpInput" 
                      type="password"
                      placeholder="Password"
                      value={signUpPassword}
                      onChange={this.onTextboxChangeSignUpPassword}
                    /><br />
                    <button type='button' class='btn btn-primary' onClick={this.onSignUp}>Sign Up</button>
                  </div>
                  </div>
          
          </span>
        </ ReactModal>
        </a>
      );
    }

    return (
      <div>
             
        <button type='button' class='btn btn-primary' onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default SignIn;
