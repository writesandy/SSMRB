import React from 'react';
import firebase from 'firebase/app';
import "firebase/database";
import ReactModal from 'react-modal'
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
        database.ref(`/${this.props.artistIdfromParent}ProfilePhoto/`).once('value').then((snapshot) => {
                if (snapshot.val() !== null) {
                const imageObject = snapshot.val();
                const keys = Object.keys(imageObject);
                keys.forEach(key => images.push(imageObject[key]))
                } else {
                    console.log("No Images to display")
                }
        }).then(() => {
                this.setState({ 
                    images,
                    userId: this.props.artistIdfromParent
                 })
        })
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistIdfromParent !== prevProps.artistIdfromParent) {
            this.getFirebaseData();
        }
    }

    render() {
        let pics;
        
        if (this.state.images) {
            pics = this.state.images.map((image, i) => {
                return (
                    <div key={image.name} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" >
                        <img alt={image.title} className="profileImage" src={image.url} />
                    </div>
                )
            })
        }
        if (this.state.pickedImg) {
            modalPicUrl = this.state.pickedImg.url
            modalPicTitle = this.state.pickedImg.title
        }
      return (
        <div className="container pageContentWidth">
            <div className="container">
                <div id="profilePhoto">
                    {pics}
                </div>
            </div>
            <div className="container-fluid">
                <div className="imageUploader">
                    <UserProfileUploader fetchNewImages={this.getFirebaseData} passingID={this.state.userId} />
                </div>
            </div>
        </div>
                
        
      );
    }
   
  }

  export default UserProfilePhoto;