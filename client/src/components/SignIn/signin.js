import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import 'whatwg-fetch';
import SignUp from '../SignUp';
import SignUpProfile from '../SignUp';
import './SignIn.css';
import {getFromStorage, setInStorage} from '../../utils/storage';
//import style from "..styles/vendor/style.less";

// Bind modal to Login Button
ReactModal.setAppElement('#root');
// create key on state to keep track of modal - done -
// check that state and display in render - done - 
// add method that changes state

class SignIn extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      token: '',
      signInError: '',
      signInEmail: '',
      signInPassword: '',
      //Modal
      showModal:false,
      //Toggle Sign In & Sign Up
      showSignUp: false,
      showSignUpProfile: false,
    };

    this.onTextboxChangeSignInEmail = this.onTextboxChangeSignInEmail.bind(this);
    this.onTextboxChangeSignInPassword = this.onTextboxChangeSignInPassword.bind(this);
    
    this.onSignIn = this.onSignIn.bind(this);
    this.logout = this.logout.bind(this);

    //Modal
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    
  }

//make the above into a fat arrow function 
// bindThis => (this){

// }

  componentDidMount() {
    const obj = getFromStorage('the_main_app');
    if (obj && obj.token) {
      const { token } = obj;
      fetch('api/account/verify?token=' + token)
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
    fetch('api/account/signin', {
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
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    console.log('We called it', this.state.showModal)
    this.setState({ showModal: false},
    ()=>console.log('setState as well', this.state.showModal));
  };
  
  componentDidUpdate(){
    console.log('update', this.state.showModal)
  }

  handleSignUp(){
    this.setState({showSignUp: true});
  }

  handleSignIn(){
    this.setState({showSignUp: false})
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

      //Add specific class to ReactModal

      return (
        <div>
        <a id="signInModalTrigger" className="navbar-brand login" href="#" onClick={this.handleOpenModal}>Login
        </a>

        <ReactModal isOpen={this.state.showModal} style={{content: {
                                                            position: 'relative',
                                                            top: 'unset',
                                                            left: 'unset',
                                                            right: 'unset',
                                                            bottom: 'unset',
                                                            border: '1px solid grey',
                                                            background: 'rgb(255, 255, 255)',
                                                            overflow: 'hidden',
                                                            borderRadius: '0px',
                                                            outline: 'none',
                                                            padding: '0px',
                                                            width: '75%',
                                                            height: '60%',
                                                            margin: '80px 12.5%',
                                                            backgroundImage: 'url(https://images.pexels.com/photos/1111367/pexels-photo-1111367.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
                                                            backgroundPosition: 'left',
                                                            backgroundSize: 'cover'
                                                          }
                                                        }}>
          {!this.state.showSignUp && <span className= 'sign-in-page'>                
                <div className='modalFields col-12  col-xs-12 col-sm-6 col-md-4'>
                  <div id="signInForm">
                    {
                      (signInError) ? (
                        <p>{signInError}</p>
                      ) : (null)
                    }
                    <input
                      className="signInInput"
                      type="email"
                      placeholder="Email"
                      value={signInEmail}
                      onChange={this.onTextboxChangeSignInEmail}
                    />
                    <input
                      className="signInInput"
                      type="password"
                      placeholder="Password"
                      value={signInPassword}
                      onChange={this.onTextboxChangeSignInPassword}
                    />
                    <br />
                    <button type='button' className='btn btn-primary signInUpBtn'  onClick={this.onSignIn}>Sign In</button>
                  </div>
                </div>
                  </span> }
          {!this.state.showSignUp && <h6 className="memberStatus">Not a Member? <a href="#" onClick={this.handleSignUp}>Sign Up</a></h6>}
          {this.state.showSignUp && <SignUp handleCloseModal ={this.handleCloseModal.bind(this)}/>}
          {this.state.showSignUp && <h6 className="memberStatus">Already a Member? <a href="#" onClick={this.handleSignIn}>Sign In</a></h6>}
          <a id="closeLogin" href="#" onClick={this.handleCloseModal}>CLOSE X </a>
        </ ReactModal>
        </div>
      );
    }

    return (
      <div>
             
        <button type='button' className='btn btn-primary' onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

export default SignIn;