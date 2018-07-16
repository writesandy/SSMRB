import React, { PureComponent } from 'react';
import 'whatwg-fetch'
import './SignUp.css'


import {
    getFromStorage,
    setInStorage,
  } from '../../utils/storage';

  class SignUp extends PureComponent {
    constructor(props) {
      super(props);
  
      this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signUpEmail: '',
        signUpPassword: '',
        InstagramHandle: '',
        TwitterHandle: '',
        ArtistBio: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
      };
      this.onTextboxChangeTwitterHandle = this.onTextboxChangeTwitterHandle.bind(this);
      this.onTextboxChangeInstagramHandle = this.onTextboxChangeInstagramHandle.bind(this);
      this.onTextboxChangeSignUpEmail = this.onTextboxChangeSignUpEmail.bind(this);
      this.onTextboxChangeSignUpPassword = this.onTextboxChangeSignUpPassword.bind(this);
      this.onTextboxChangeArtistBio = this.onTextboxChangeArtistBio.bind(this);
      this.onTextboxChangephoneNumber = this.onTextboxChangephoneNumber.bind(this);
      this.onTextboxChangefirstName = this.onTextboxChangefirstName.bind(this);
      this.onTextboxChangelastName = this.onTextboxChangelastName.bind(this);
     
      this.onSignUp = this.onSignUp.bind(this);
      this.logout = this.logout.bind(this);
    }
  
    componentDidMount() {
      const obj = getFromStorage('the_main_app');
      if (obj && obj.token) {
        const { token } = obj;
        // Verify token
        console.log(token)
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
  onTextboxChangeInstagramHandle(event) {
    this.setState({
      InstagramHandle: event.target.value,
    });
  }
  onTextboxChangeTwitterHandle(event) {
    this.setState({
      TwitterHandle: event.target.value,
    });
  }
  onTextboxChangephoneNumber(event) {
    this.setState({
      phoneNumber: event.target.value,
    });
  }
  onTextboxChangefirstName(event) {
    this.setState({
      firstName: event.target.value,
    });
  }

  onTextboxChangelastName(event) {
    this.setState({
      lastName: event.target.value,
    });
  }
  onTextboxChangeArtistBio(event) {
    this.setState({
      ArtistBio: event.target.value,
    });
  }
onSignUp() {
    // Grab state
    const {
      signUpEmail,
      signUpPassword,
      InstagramHandle,
      TwitterHandle,
      ArtistBio,
      firstName,
      lastName,
      phoneNumber,
    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('routes/api/account/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'// this also could be json data
      },
      body: JSON.stringify({
        email: signUpEmail,
        password: signUpPassword,
        TwitterHandle: TwitterHandle,
        InstagramHandle: InstagramHandle,
        ArtistBio: ArtistBio,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
      })
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', {token: json.token});
          this.setState({
            signUpError: json.message,
            isLoading: false,
            signUpEmail: '',
            signUpPassword: '',
            TwitterHandle: '',
            InstagramHandle: '',
            ArtistBio: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  // onSignUp() {
  //   // Grab state
  //   const {
  //     signUpEmail,
  //     signUpPassword,
  //     TwitterHandle,
  //     InstagramHandle,
  //     ArtistBio,
  //     firstName,
  //     lastName,
  //     phoneNumber,
  //   } = this.state;

  //   this.setState({
  //     isLoading: true,
  //   });

  //   // Post request to backend
  //   fetch('routes/api/account/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       email: signUpEmail,
  //       password: signUpPassword,
  //       TwitterHandle: TwitterHandle,
  //       InstagramHandle: InstagramHandle,
  //       ArtistBio: ArtistBio,
  //       firstName: firstName,
  //       lastName: lastName,
  //       phoneNumber: phoneNumber, 
  //     }),
  //   }).then(res => res.json())
  //     .then(json => {
  //       if (json.success) {
  //         setInStorage('the_main_app', { token: json.token });
  //         this.setState({
  //           signInError: json.message,
  //           isLoading: false,
  //           signUpPassword: '',
  //           signUpEmail: '',
  //           InstagramHandle: '',
  //           ArtistBio: '',
  //           TwitterHandle: '',
  //           firstName: '',
  //           lastName:'',
  //           phoneNumber:'',
  //           token: json.token,
  //         });
  //       } else {
  //         this.setState({
  //           signInError: json.message,
  //           isLoading: false,
  //         });
  //       }
  //     });
  // }

  logout() {
    this.setState({
      isLoading: true,
    });
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      // Verify token
      console.log(token);
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
      signUpEmail,
      signUpPassword,
      signUpError,
      firstName,
      lastName,
      ArtistBio,
      phoneNumber,
      InstagramHandle,
      TwitterHandle,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
    if (!token) {
      return (
  <span class = 'sign-in-page'>     
        <div className='modalFields col-12  col-xs-12 col-sm-6 col-md-4'>
          <div>
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <input
              type="firstname"
              placeholder="First Name"
              value={firstName}
              onChange={this.onTextboxChangefirstName}
            />
            <br />
            <input
              type="Last Name"
              placeholder="lastName"
              value={lastName}
              onChange={this.onTextboxChangelastName}
            />
            <br />
            <input
              type="phoneNumber"
              placeholder="phoneNumber"
              value={phoneNumber}
              onChange={this.onTextboxChangephoneNumber}
            />
            <br />
            <input
              type="ArtistBio"
              placeholder="ArtistBio"
              value={ArtistBio}
              onChange={this.onTextboxChangeArtistBio}
            />
            <br />
            <input
              type="InstagramHandle"
              placeholder="InstagramHandle"
              value={InstagramHandle}
              onChange={this.onTextboxInstagramHandle}
            />
            <br />
            <input
              type="TwitterHandle"
              placeholder="TwitterHandle"
              value={TwitterHandle}
              onChange={this.onTextboxTwitterHandle}
            />
            <br />
            <input
              type="signUpPassword"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignInPassword}
            />
            <br />
            <input
              type="signUpEmail"
              placeholder="signUpEmail"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            />
            <br />
            <button type='button' className='btn btn-primary' onClick={this.onSignUp}>Create Profile</button>
          </div>
          <br />
          <br />
          <div>
         
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <input class
              type="email"
              placeholder="Email"
              value={signUpEmail}
              onChange={this.onTextboxChangeSignUpEmail}
            /><br />
            <input class 
              type="password"
              placeholder="Password"
              value={signUpPassword}
              onChange={this.onTextboxChangeSignUpPassword}
            /><br />
            <button type='button' className='btn btn-primary' onClick={this.onSignUp}>Sign Up</button>
          </div>
          </div>
  
   </span>
      );
    }  
  }
}
export default SignUp;
   