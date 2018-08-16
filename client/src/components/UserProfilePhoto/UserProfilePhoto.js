import React from 'react';
import firebase from 'firebase/app';
import "firebase/database";
// import ReactModal from 'react-modal'
import UserProfileUploader from '../UserProfileUploader';
import './UserProfilePhoto.css';

class UserProfilePhoto extends React.PureComponent {
    constructor(props) {
        super(props);
            this.state = {
                Titles: [],
                Urls: [],
                images:  [],
                userId: '',
            }
    }

    getFirebaseData = () => {
        const database = firebase.database();
        const images = [];
        console.log('email here?', this.props.artistFirebaseIDfromParent)
        database.ref(`/${this.props.artistFirebaseIDfromParent}ProfilePhoto/`).once('value').then((snapshot) => {
                if (snapshot.val() !== null) {
                const imageObject = snapshot.val();
                const keys = Object.keys(imageObject);
                keys.forEach(key => images.push(imageObject[key]))
                } else {
                    console.log("No Images to display")
                }
        }).then(() => {
            // console.log('is the id still here?', this.props.artistFirebaseIDfromParent)
                this.setState({ 
                    images,
                    userId: this.props.artistFirebaseIDfromParent
                 })
        })
       
    }

    componentDidMount() {
        this.getFirebaseData();
    }

    render() {
        // console.log('is there anything here?', this.state.images)
        if (this.state.images) {
            // pics = this.state.images.map((image, i) => {
                // console.log('what is here', this.state.images[2])
                return (
                    <div className="container pageContentWidth">
                        <div className="profilePhotoHeader">
                            <h4>Profile Photo</h4>
                            <p>{this.state.images[1]}</p>
                        </div>
                        <div key={this.state.images[0]} className="profileImageContainer">
                            <img alt={this.state.images[1]} className="profileImage" src={this.state.images[2]} />
                        </div>
                        <div className="container-fluid">
                            <div className="imageUploader">
                                <UserProfileUploader fetchNewImages={this.getFirebaseData} passingID={this.state.userId} />
                            </div>
                        </div>
                    </div>
                )
            // })
        }
    }
   
  }

  export default UserProfilePhoto;