import React, { Component } from 'react';
import './ImageUpload2.css';
// import axios from 'axios';
// import { List, ListName } from "../../components/List";

class ImageUpload2 extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    console.log('handleChange:', event.target.files)
    if (event.target.files.length < 1) {
      this.setState({
        name: '',
        file: null
      })
    } else {
      this.setState({
        file: URL.createObjectURL(event.target.files[0]),
        name: event.target.files[0].name
      })
    }
  }
  
    fileSelectedHandler = event => {
    console.log(event.target.files)
      this.setState({
        selectedFile: event.target.files[0],
        name: event.target.files[0].name
      })
    }

    delete = event => {
      this.setState({
        file: null,
        name: ''
      })
      console.log(this.state)
    }
  
    imageUpload = (event) => {
      event.preventDefault();
      console.log(this.state);
      // const fd = new FormData();
      // fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
      // axios.post(fd, {})
      //   .then(res => {
      //     console.log('this is res in imageUpload', res);
      //   })
    }

    render() {
      return (
        <div className="App">
            <input 
            style={{display: 'none'}}
            type="file" 
            onChange={this.handleChange}
            ref={fileInput => this.fileInput = fileInput}/>            
            <button onClick={() => this.fileInput.click()}>Pick File</button>
            <h3> Image to be uploaded </h3>
            {this.state.name ? (
                    <div className='fileName'>
                        <img className='uploadImage' alt={`Name of file being uploaded ${this.state.name}`} src={this.state.file} onClick={this.delete}/>
                    </div>
            ) : (
                <h5 className="noResults">No Image has been chosen</h5>
            )}
            <button onClick={this.imageUpload}>Upload</button>
        </div>
      )
    }
}
  
  export default ImageUpload2;
