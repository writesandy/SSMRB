import React, { PureComponent } from 'react';
import './UserProfileUploader.css';
// import API from '../../utils/API'
// import { List, ListItem } from "../../components/List";
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/database';
import FileUploader from "react-firebase-file-uploader";
// import AuthUserContext from '../FirebaseAuthUserContext';
// import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class UserProfileUploader extends PureComponent {
    state = {
      name: '',
    //   file: null,
    //   files: [],
      imageTitle: "",
      generatedName: "",
      isUploading: false,
      progress: 0,
      imageURL: ""
    }

    handleChangeImageTitle = event => {
        this.setState({ imageTitle: event.target.value });
        document.getElementById('titleInput').value=''
    }

    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    
    handleProgress = progress => this.setState({ progress });
    
    handleUploadError = error => {
        this.setState({ isUploading: false });
        console.error(error);
    };

    databasePush = () => {
        //Adding a piece tied to their login to the folder will allow for them to have
        // a unique folder for just them.
        // console.log('props', this.props)
        let itemsRef = firebase.database().ref(`${this.props.passingID}ProfilePhoto/`)
        // console.log(this.state.imageURL)
        
        let updates = {
            url: this.state.imageURL,
            name: this.state.generatedName,
            title: this.state.imageTitle
        }
        itemsRef.set(updates);
    }

    handleUploadSuccess = filename => {
        this.setState({ generatedName: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({ 
                    imageURL: url,
                    generatedName: filename,
                })
            }).then(() => {
                this.databasePush()
                this.setState({
                    imageTitle: ''
                })
                this.props.fetchNewImages()
            })
            // console.log(firebase.storage().ref("images").child(filename).getDownloadURL())
    };    

    // validateForm = () => {
    //     const x = document.forms["myForm"]["imageTitle"].value;
    //     if (x === "") {
    //         alert("Image Title must be filled out");
    //         return false;
    //     }
    // }

  render() {
    // console.log('props here?', this.props)
    return (
        <div>
            <form name='myForm'>
            <label>Upload an Image:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                <br/>
                <label>Add an Image Title</label>
                <input
                    type="text"
                    id="titleInput"
                    value={this.state.imageTitle}
                    name="imageTitle"
                    onChange={this.handleChangeImageTitle}
                />
                {/* {this.state.imageURL && <img alt={this.state.filename} src={this.state.imageURL} />} */}
                <FileUploader
                    accept="image/*"
                    name="generatedName"
                    randomizeFilename
                    // onSubmit={this.validateForm()}
                    storageRef={firebase.storage().ref("images")}
                    onUploadStart={this.handleUploadStart}
                    onUploadError={this.handleUploadError}
                    onUploadSuccess={this.handleUploadSuccess}
                    onProgress={this.handleProgress}
                    // onPushtoDatabase={this.handlePushToDatabase}
                />
            </form>
        </div>        
        )
    }
}

    export default UserProfileUploader;