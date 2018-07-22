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
      files: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(event) {
      event.preventDefault();
      const data = new FormData(event.target);

      fetch('/upload', {
          method: 'POST',
          body: data,
      })
      .then(this.state.files.forEach((elem) => {
          console.log('LOOOOOOOK HEEEERE: ', this.state.files)
        if(elem._id === event.target.id){
            API.saveImages({
                filename: elem.filename
            })
            .then(res => {
                this.state.files.push(res.userImage)
                this.loadSavedImages();
            })
            .catch(err => console.log(err));
        }
    }))
    }

    saveImages = (event) => {
        event.preventDefault();
        this.state.files.forEach((elem) => {
            if(elem._id === event.target.id){
                API.saveImages({
                    filename: elem.filename
                })
                .then(res => {
                    this.state.files.push(res.userImage)
                    this.loadSavedImages();
                })
                .catch(err => console.log(err));
            }
        })
    }

    loadSavedImages = () => {
        API.getImages()
            .then(res => {
                console.log('loading images ', res.data)
                this.setState({ files: res.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        this.loadSavedImages()
        // API.getImages()
        //     .then(res=> console.log('check here', res.data))
    }

    // findOneImage = id => {
    //     API.findImage(id)
    //         .then(res => {
    //             this.setState({
    //                 file
    //             })
    //         })
    // }

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