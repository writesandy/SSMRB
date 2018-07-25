// This will be good for replacing a profile image for individual users
// more needs to be changed, but it overwrites all data
// in the folder on firebase meaning only one photo is
// accessable at a time. Think I'd need to add a different folder 
// structure where we add a unique id to the folder tied to their
// user id or account name?

// databasePush = () => {
//     let itemsRef = firebase.database().ref('ImageData/').set({
//         url: this.state.imageURL,
//         name: this.state.generatedName,
//         title: this.state.imageTitle
//     })
// }

import React, { PureComponent } from 'react';
import './ImageUpload.css';
// import API from '../../utils/API'
// import { List, ListItem } from "../../components/List";
import firebase from "firebase/app";
import 'firebase/storage';
import 'firebase/database';
import FileUploader from "react-firebase-file-uploader";
// import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class ImageUpload extends PureComponent {
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
        let itemsRef = firebase.database().ref('ImageData/')
        // console.log(this.state);
        console.log(this.state.imageURL)
        
        let updates = {
            url: this.state.imageURL,
            name: this.state.generatedName,
            title: this.state.imageTitle
        }
        itemsRef.push(updates);
    }

// put databasePush into compnonentDidUpdate
// lifecycle method in react.

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
            })
            // console.log(firebase.storage().ref("images").child(filename).getDownloadURL())
    };    

  render() {
    return (
        <div>
            <form>
                <label>Add an Image Title</label>
                <input
                    type="text"
                    id="titleInput"
                    value={this.state.imageTitle}
                    name="imageTitle"
                    onChange={this.handleChangeImageTitle}
                />
                <label>Upload an Image:</label>
                {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
                {/* {this.state.imageURL && <img alt={this.state.filename} src={this.state.imageURL} />} */}
                <FileUploader
                    accept="image/*"
                    name="generatedName"
                    randomizeFilename
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

    export default ImageUpload;