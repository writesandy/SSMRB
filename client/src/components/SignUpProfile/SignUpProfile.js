import React, { PureComponent } from 'react';
import 'whatwg-fetch';
import '../SignUpProfile';
 
import { getFromStorage,setInStorage, } from '../../utils/storage';

  class SignUpProfile extends PureComponent {
    constructor(props) {
      super(props);
     //this.props.handleCloseModal()

      this.state = {
        isLoading: true,
        token: '',
        signUpError: '',
        InstagramHandle: '',
        TwitterHandle: '',
        LinkedIn: '',
        ArtistBio: '',
        Website: '',
        title: '',
        showSignUpProfile: true,
      };
      this.onTextboxChangeTwitterHandle = this.onTextboxChangeTwitterHandle.bind(this);
      this.onTextboxChangeInstagramHandle = this.onTextboxChangeInstagramHandle.bind(this);
      this.onTextboxChangetitle = this.onTextboxChangetitle.bind(this);
      this.onTextboxChangeArtistBio = this.onTextboxChangeArtistBio.bind(this);
      this.onTextboxChangeWebsite = this.onTextboxChangeWebsite.bind(this);
      this.onTextboxChangeLinkedIn = this.onTextboxChangeLinkedIn.bind(this);
      
      this.onSignUp = this.onSignUp.bind(this);
    }
  
    componentDidMount() {
      console.log("sign up email state", this.props.signUpEmail)
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
 //this.props.handleCloseModal()
    // Grab state
    const {
      InstagramHandle,
      TwitterHandle,
      LinkedIn,
      Website,
      title,
      ArtistBio,
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
        TwitterHandle: TwitterHandle,
        InstagramHandle: InstagramHandle,
        Website: Website,
        LinkedIn: LinkedIn,
        title: title,
        ArtistBio: ArtistBio,
        email: this.signUpEmail,
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
            title: '',
          });
        } else {
          this.setState({
            signUpError: json.message,
           // isLoading: false,
          });
        }
      }).catch(err => console.log(err))
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

    // if (isLoading) {
    //   return (<div><p>Loading...</p></div>);
    // }
    //   else {
      return (
  
  <span class = 'sign-in-page'> 
 
     <div className='modalFields col-12  col-xs-12 col-sm-6 col-md-4'>
     <form>
          <div className="signUpForm">
            {
              (signUpError) ? (
                <p>{signUpError}</p>
              ) : (null)
            }
            <label htmlFor="signUpInput" className="hidden">Input your LinkedIn. Optional. </label>
            <input
              className="signUpInput"
              type="LinkedIn"
              placeholder="LinkedIn"
              value={this.state.value}
              onChange={this.onTextboxChangeLinkedIn}
            />
             <label htmlFor="signUpInput" className="hidden">Input your Website.Optional. </label>
             <input
              className="signUpInput"
              type="Website"
              placeholder="Website"
              value={this.state.value}
              onChange={this.onTextboxChangeWebsite}
            />
             <label htmlFor="signUpInput" className="hidden">Input your title. Optional. </label>
             <input
              className="signUpInput"
              type="Title"
              placeholder="Title"
              value={this.state.value}
              onChange={this.onTextboxtitle}
            />
            <label htmlFor="signUpInput" className="hidden">Input your Instagram. Optional. </label>
            <input
              className="signUpInput"
              type="InstagramHandle"
              placeholder="Instagram Handle"
              value={this.state.value}
              onChange={this.onTextboxInstagramHandle}
            />
            <label htmlFor="signUpInput" className="hidden">Input your Twitter. Optional. </label>
            <input
              className="signUpInput"
              type="TwitterHandle"
              placeholder="Twitter Handle"
              value={this.state.value}
              onChange={this.onTextboxTwitterHandle}
            />
              <label htmlFor="signUpInput" className="hidden">Input your ArtistBiography. Optional. </label>
            <textarea
              id = "artistBioTextarea"
              className="signUpInput"
              type="ArtistBio"
              placeholder="A little about you... "
              value={ArtistBio}
              onChange={this.onTextboxChangeArtistBio}
            />
           
                      <a id="closeLogin" href="#signup" onClick={this.handleCloseModal}>CLOSE X </a>
                      </div>
                      <button type='button' className='btn btn-primary signInUpBtn' onClick={this.onSignUp}>Save Profile </button>
           {/* <button type='button' className='btn btn-primary signInUpBtn' onClick={() => {this.onSignUp}}>Save Profile </button> */}
            </form>
          </div>  
        
  </span>
      );
    }  
  }
//}
export default SignUpProfile;