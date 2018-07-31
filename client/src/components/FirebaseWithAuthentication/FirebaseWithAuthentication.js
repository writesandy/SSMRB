import React from 'react';
import FirebaseAuthUserContext from '../FirebaseAuthUserContext';
import { firebase } from '../../firebase';

const FirebaseWithAuthentication = (Component) => {
  class FirebaseWithAuthentication extends React.Component {
    constructor(props) {
        super(props);
  
        this.state = {
          authUser: null,
        };
      }
  
      componentDidMount() {
        firebase.auth.onAuthStateChanged(authUser => {
          authUser
            ? this.setState({ authUser })
            : this.setState({ authUser: null });
        });
      }
    
    render() {
        const { authUser } = this.state;
      return (
        <FirebaseAuthUserContext.Provider value={authUser}>
          <Component />
        </FirebaseAuthUserContext.Provider>
      );
    }
  }

  return FirebaseWithAuthentication;
}

export default FirebaseWithAuthentication;
