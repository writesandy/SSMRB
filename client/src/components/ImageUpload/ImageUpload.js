import React, { PureComponent } from 'react';
import './ImageUpload.css';
// import API from '../../utils/API'
// import { List, ListItem } from "../../components/List";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
// import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class ImageUpload extends PureComponent {
    state = {
      name: '',
    //   file: null,
    //   files: [],
      username: "",
      imageName: "",
      isUploading: false,
      progress: 0,
      imageURL: ""
    }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  
  handleProgress = progress => this.setState({ progress });
  
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  databasePush = () => {
    let itemsRef = firebase.database().ref('ImageData/')
    console.log(this.state);
    let updates = {
        url: this.state.imageURL,
        name: this.state.imageName
    }
    itemsRef.push(updates);
}

    handleUploadSuccess = filename => {
        this.setState({ imageName: filename, progress: 100, isUploading: false });
        firebase
            .storage()
            .ref("images")
            .child(filename)
            .getDownloadURL()
            .then(url => {
                this.setState({ 
                    imageURL: url,
                    imageName: filename 
                })
            }).then(this.databasePush())
            // console.log(firebase.storage().ref("images").child(filename).getDownloadURL())
    };    

  render() {
    return (
      <div>
        <form>
          <label>Upload an Image:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.imageURL && <img alt={this.state.filename} src={this.state.imageURL} />}
          <FileUploader
            accept="image/*"
            name="imageName"
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