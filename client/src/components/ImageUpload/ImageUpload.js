import React, { Component } from 'react';
import './ImageUpload.css';
import axios from 'axios';
import { List } from "../../components/List";

class ImageUpload extends Component {

    state = {
      selectedFile: [],
      name: ''
    }
  
    fileSelectedHandler = event => {
    console.log(event.target.files)
      this.setState({
        selectedFile: event.target.files[0],
        name: event.target.files[0].name
      })
    }
  
    fileUploadHandler = () => {
      const fd = new FormData();
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      axios.post(fd, {})
        .then(res => {
          console.log('this is res in fileUploadHandler', res);
        })
    }

    delete(item){
        const newState = this.state.selectedFile.slice();
        if (newState.indexOf(item) > -1) {
          newState.splice(newState.indexOf(item), 1);
          this.setState({selectedFile: newState})
        }
      }

    render() {
      return (
        <div className="App">
            <input 
            style={{display: 'none'}}
            type="file" 
            onChange={this.fileSelectedHandler}
            ref={fileInput => this.fileInput = fileInput}/>            
            <button onClick={() => this.fileInput.click()}>Pick File</button>
            <button onClick={this.fileUploadHandler}>Upload</button>
            <h3> Image to be uploaded </h3>
            {this.state.name ? (
                <List>
                    <div className='fileName'>
                        {this.state.name}
                        {console.log('this is here', this.state)}
                    </div>
                </List>
            ) : (
                <h5 className="noResults">No Image has been chosen</h5>
            )}
        </div>
      )
    }
}
  
  export default ImageUpload;
