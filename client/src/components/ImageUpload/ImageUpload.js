import React, { Component } from 'react';
import './ImageUpload.css';
import axios from 'axios';
import { List, ListItem } from "../../components/List";

class ImageUpload extends Component {

    state = {
      selectedFile: []
    }
  
    fileSelectedHandler = event => {
      this.setState({
        selectedFile: event.target.files[0]
      })
    }
  
    fileUploadHandler = () => {
      const fd = new FormData();
      fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      axios.post(fd, {})
        .then(res => {
          console.log(res);
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
            {console.log(this.state.selectedFile)}
            {this.state.selectedFile.length ? (
            <List>
                <h3>Items to upload</h3>
                {this.state.selectedFile.map((file, item) => (
                    <ListItem key={file._id}>
                        <div className='selectedFile'>
                            {file.name}
                        </div>
                        <div className='url'>
                            <button onClick={this.delete.bind(this, item)}>Delete</button> 
                        </div>
                    </ListItem>
                ))}
            </List>
                ) : (
                <h3 className="noResults">No Results to Display</h3>
            )}
            <button onClick={this.fileUploadHandler}>Upload</button>
        </div>
      )
    }
}
  
  export default ImageUpload;
