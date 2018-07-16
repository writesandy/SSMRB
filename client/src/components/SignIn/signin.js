import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import 'whatwg-fetch';
import PinkPhoto from './pexels-photo-1111367.jpeg';
import './SignIn.css';


//import style from "..styles/vendor/style.less";

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
      signInError: '',
      signInEmail: '',
      signInPassword: '',

    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);
  }

//make the above into a fat arrow function 
// bindThis => (this){

// }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
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
  // onSignUp() {
  //   // Grab state
  //   const {
  //     signInEmail,
  //     signInPassword,
  //   } = this.state;

  //   this.setState({
  //     isLoading: true,
  //   });

  //   // Post request to backend
  //   fetch('/api/account/sign', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'// this also could be json data
  //     },
  //     body: JSON.stringify({
  //       email: signInEmail,
  //       password: signInPassword,
  //     })
  //   }).then(res => res.json())
  //     .then(json => {
  //       console.log('json', json);
  //       if (json.success) {
  //         this.setState({
  //           signInError: json.message,
  //           isLoading: false,
  //           signUpEmail: '',
  //           signUpPassword: '',
  //         });
  //       } else {
  //         this.setState({
  //           signUpError: json.message,
  //           isLoading: false,
  //         });
  //       }
  //     });
  // }

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
    fetch('routes/api/account/signin', {
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
      fetch('routes/api/account/logout?token=' + token)
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

  render() {
    const {
      isLoading,
      token,
      signInError,
      signInEmail,
      signInPassword,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
        <ReactModal isOpen={this.state.showModal}>
         <span class = 'sign-in-page'>
        <div class = 'col-12 col-md-8 pink'>
        <img class='img-fluid max-width: 50% height: auto' src={PinkPhoto} alt={'pink-styling'}/>
        </div>
        
        <div class='col-12 col-md-4'>
          <div>
            {
              (signInError) ? (
                <p>{signInError}</p>
              ) : (null)
            }
            <h3>Welcome, Existing Users! Please Sign In Here</h3>
            <input
              type="email"
              placeholder="Email"
              value={signInEmail}
              onChange={this.onTextboxChangeSignInEmail}
            />
            <br />
            <input
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
            </div>
   </span>
   </ReactModal>
      );
    }

    return (
      <ReactModal>
      <div>
             
        <button type='button' class='btn btn-primary' onClick={this.logout}>Logout</button>
      </div>
      </ReactModal>
    );
  }
}

export default SignIn;