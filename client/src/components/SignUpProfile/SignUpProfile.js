import React, { PureComponent } from 'react';
import ReactModal from 'react-modal';
import 'whatwg-fetch'
import './SignUpProfile.css'
import SignIn from '../SignIn';

import {
    getFromStorage,
    setInStorage,
  } from '../../utils/storage';

  class SignUpProfile extends PureComponent {
    constructor(props) {
      super(props);
      //this.props.handleCloseModal()

      this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        signUpEmail: '',
        signUpPassword: '',
        InstagramHandle: '',
        TwitterHandle: '',
        LinkedIn: '',
        ArtistBio: '',
        firstName: '',
        lastName: '',
        Website: '',
        showSignUpProfile: true,
      };
      this.onTextboxChangeTwitterHandle = this.onTextboxChangeTwitterHandle.bind(this);
      this.onTextboxChangeInstagramHandle = this.onTextboxChangeInstagramHandle.bind(this);
       
     
      this.onTextboxChangeArtistBio = this.onTextboxChangeArtistBio.bind(this);
      this.onTextboxChangeWebsite = this.onTextboxChangeWebsite.bind(this);
      this.onTextboxChangeLinkedIn = this.onTextboxChangeLinkedIn.bind(this);
      
      //this.handleCloseModal = this.handleCloseModal.bind(this);
      //this.onSignUp = this.onSignUp.bind(this);
      //this.logout = this.logout.bind(this);
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
  
  onTextboxChangeWebsite(event) {
    this.setState({
      Website: event.target.value,
    });
  }
  onTextboxChangetitle(event) {
    this.setState({
      title: event.target.value,
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
  
  onTextboxChangeLinkedIn(event) {
    this.setState({
      LinkedIn: event.target.value,
    });
  }

  handleCloseModal () {
    console.log('We called it', this.state.showModal)
    this.setState({ showModal: false},
    ()=>console.log('setState as well', this.state.showModal));
  };

onSignUp() {
 // this.props.handleCloseModal()
    // Grab state
    const {
      //signUpEmail,
      //signUpPassword,
      InstagramHandle,
      TwitterHandle,
      ArtistBio,
      LinkedIn,
      Website,
      title,

    } = this.state;

    this.setState({
      isLoading: true,
    });

    // Post request to backend
    fetch('routes/api/account/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'// this also could be json data
      },
      body: JSON.stringify({
        //email: signUpEmail,
        //password: signUpPassword,
        TwitterHandle: TwitterHandle,
        InstagramHandle: InstagramHandle,
        Website: Website,
        LinkedIn: LinkedIn,
        title, title,
      })
    }).then(res => res.json())
      .then(json => {
        console.log('json', json);
        if (json.success) {
          setInStorage('the_main_app', {token: json.token});
          this.setState({
            signUpError: json.message,
            isLoading: false,
            TwitterHandle: '',
            InstagramHandle: '',
            ArtistBio: '',
            LinkedIn: '',
            Website: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
            isLoading: false,
          });
        }
      });
  }

  render()  {
    const {
      isLoading,
      signUpError,
      LinkedIn,
      ArtistBio,
      Website,
      InstagramHandle,
      TwitterHandle,
      title,
    } = this.state;

    if (isLoading) {
      return (<div><p>Loading...</p></div>);
    }
      else {
      return (
  
  <span class = 'sign-in-page'> 
  
     <div className='modalFields col-12  col-xs-12 col-sm-6 col-md-4'>
          <div className="signUpForm">
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <input
              className="signUpInput"
              type="LinkedIn"
              placeholder="LinkedIn"
              value={LinkedIn}
              onChange={this.onTextboxChangeLinkedIn}
            />
             <input
              className="signUpInput"
              type="Website"
              placeholder="Website"
              value={Website}
              onChange={this.onTextboxChangeWebsite}
            />
             <input
              className="signUpInput"
              type="Title"
              placeholder="Title"
              value={title}
              onChange={this.onTextboxtitle}
            />
            <input
              className="signUpInput"
              type="InstagramHandle"
              placeholder="Instagram Handle"
              value={InstagramHandle}
              onChange={this.onTextboxInstagramHandle}
            />
            <input
              className="signUpInput"
              type="TwitterHandle"
              placeholder="Twitter Handle"
              value={TwitterHandle}
              onChange={this.onTextboxTwitterHandle}
            />
            <textarea
              id = "artistBioTextarea"
              className="signUpInput"
              type="ArtistBio"
              placeholder="A little about you... "
              value={ArtistBio}
              onChange={this.onTextboxChangeArtistBio}
            />
                      <a id="closeLogin" href="#" onClick={this.handleCloseModal}>CLOSE X </a>
                      </div>
            {/* <button type='button' className='btn btn-primary signInUpBtn' onClick={this.onSignUp}>Save Profile </button> */}
          </div>      
  </span>
      );
    }  
  }
}
export default SignUpProfile;
   