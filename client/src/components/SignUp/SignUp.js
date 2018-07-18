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
        artistBoolean: true,
        //Toggle to SignUpProfile after "Create Profile" is clicked
        showSignUpProfile: false,
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
      //this.handleInputChange = this.handleInputChange.bind(this);
    }
  
    componentDidMount() {
      const obj = getFromStorage('the_main_app');
      if (obj && obj.token) {
        const { token } = obj;
        // Verify token
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
   
    handleChange(event) {
      this.setState({value: event.target.value});
    }
    // update(field) {
    //   return (e) => {
    //     this.setState({[field]: e.target.value});
    //   };
    // }
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
 onClickbox(event){
   this.setState({
      artistBoolean: event.target.value,
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
      artistBoolean,
    } = this.state;
    this.setState({
      isLoading: true,
    });
    // Post request to backend
    fetch('/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',// this also could be json data
        'Accept': 'application/json'
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
        artistBoolean: artistBoolean,
      })
    }).then(res => res.json())
      .then(json => {
        console.log('json', json)
        if (json.success) {
          setInStorage('the_main_app', {token: json.token});
          this.setState({
            signUpError: json.message,
            isLoading: false,
            artistBoolean: true,
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
  render() {
    const {
      isLoading,
      token,
      signUpEmail,
      signUpPassword,
      signUpError,
      artistBoolean,
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
          <div>
            {!this.state.showSignUpProfile && <span class = 'sign-in-page'>
                <div className='modalFields col-12  col-xs-12 col-sm-6 col-md-4'>
                    <div id="signUpForm">
                        {
                        (signUpError) ? (
                            <p>{signUpError}</p>
                        ) : (null)
                        }
                        <form>
                            <label htmlFor="firstName" className="hidden">Input your first name.</label>
                            <input
                                type="firstName"
                                placeholder="Your First Name"
                                // defaultValue={firstName}
                                value={firstName}
                                onChange={this.onTextboxChangefirstName}
                                //onChange={this.update('firstName')}
                                className="signUpInput"
                            />
                            <label htmlFor="lastName" className="hidden">Input your last name.</label>
                            <input
                                type="lastName"
                                placeholder="Your Last Name"
                                defaultValue={lastName}
                                //value={lastName}
                                //onChange={this.update('lastName')}
                                onChange={this.onTextboxChangeLastName}
                                className="signUpInput"
                            />
                            <label htmlFor="signUpEmail" className="hidden">Input your email address. This will act as your username.</label>
                            <input
                                type="signUpEmail"
                                placeholder="YourEmail@domain.com"
                                //defaultValue={signUpEmail}
                                value={signUpEmail}
                                onChange={this.onTextboxChangeSignUpEmail}
                                className="signUpInput"
                            />
                            <label htmlFor="signUpPassword" className="hidden">Input the password you would like for your account.</label>
                            <input
                                type="signUpPassword"
                                placeholder="Password"
                                //defaultValue={signUpPassword}
                                value={signUpPassword}
                                //onChange={this.handleChange}
                                onChange={this.onTextboxChangeSignUpPassword}
                                className="signUpInput"
                            />

                            <div id="artistBooleanGroup">
                                <label htmlFor="checkbox" className="hidden">Check the box if you are already an Artist United member.</label>
                                <input 
                                    type="checkbox" data-reverse
                                    data-group-cls="btn-group-sm"
                                    placeholder="True"
                                    defaultValue={artistBoolean}
                                    onChange={this.oncheckBoxUpdate}
                                    id="artistBoolean"
                                />
                                <h6 id="artistBooleanLabel">I am already an Artist United member.</h6>
                            </div>
                            {/* <input
                            type="phoneNumber"
                            placeholder="800-867-5309"
                            defaultValue={phoneNumber}
                            //value={phoneNumber}
                            onChange={this.onTextboxChangephoneNumber}
                            />
                            <br />
                            <label htmlFor="Instagram">Instagram Handle </label>
                            <input
                            type="InstagramHandle"
                            placeholder="Your Instagram"
                            defaultValue={InstagramHandle}
                            //value={InstagramHandle}
                            onChange={this.onTextboxChangeInstagramHandle}
                            />
                            <br /> 
                            <label htmlFor="Twitter">Twitter Handle </label>
                            <input
                            type="TwitterHandle"
                            placeholder="@Twitter Account"
                            defaultValue={TwitterHandle}
                            //value={TwitterHandle}
                            //onChange={this.update('TwitterHandle')}
                            onChange={this.onTextboxChangeInstagramHandle}
                            />
                            <label htmlFor="ArtistBio">Biography/Mission Statement</label>
                            <textarea 
                            type="ArtistBio"
                            class="form-control" 
                            id='ArtistBio' 
                            placeholder="Your Mission Statement here"
                            rows="3"
                            defaultValue={ArtistBio}
                            onChange={this.onsignUpArtistBio}
                            /> */}
                        </form>
                        <button type='button' class='btn btn-primary signInUpBtn' onClick={this.onSignUp}>Create Profile</button>
                    </div>
                </div>
            </span>}
        </div>
      );
    }  
  }
}
export default SignUp;