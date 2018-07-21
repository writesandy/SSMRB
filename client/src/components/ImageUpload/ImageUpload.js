import React, { PureComponent } from 'react';
import './ImageUpload.css';
// import API from '../../utils/API'
// import { List, ListItem } from "../../components/List";
import firebase from "firebase";
import FileUploader from "react-firebase-file-uploader";
import CustomUploadButton from 'react-firebase-file-uploader/lib/CustomUploadButton';

class ImageUpload extends PureComponent {
    state = {
      name: '',
      file: null,
      files: [],
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: ""
    }

  componentWillMount() {
    var config = {
        apiKey: "AIzaSyARsbPxkmRxU5VhKgWKeEC_rZ5YYgYVUXo",
        authDomain: "all-artists-united.firebaseapp.com",
        databaseURL: "https://all-artists-united.firebaseio.com",
        projectId: "all-artists-united",
        storageBucket: "all-artists-united.appspot.com",
        messagingSenderId: "973958386828"
      };
      firebase.initializeApp(config);
  }

  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  
  handleProgress = progress => this.setState({ progress });
  
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };

  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url }))
      .then(alert("Succesfully uploaded"))
      console.log(firebase.storage().ref("images").child(filename).getDownloadURL())
  };

  render() {
    return (
      <div>
        <form>
          <label>Avatar:</label>
          {this.state.isUploading && <p>Progress: {this.state.progress}</p>}
          {this.state.avatarURL && <img src={this.state.avatarURL} />}
          <FileUploader
            accept="image/*"
            name="avatar"
            randomizeFilename
            storageRef={firebase.storage().ref("images")}
            onUploadStart={this.handleUploadStart}
            onUploadError={this.handleUploadError}
            onUploadSuccess={this.handleUploadSuccess}
            onProgress={this.handleProgress}
          />
        </form>
      </div>        
        )
    }
}

    export default ImageUpload;