import React, { PureComponent } from 'react';
import './ImageUpload.css';
import API from '../../utils/API'
import { List, ListItem } from "../../components/List";

class ImageUpload extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
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
                this.setState({ files: res.data })
            })
            .catch(err => console.log(err))
    }

    componentDidMount() {
        // API.getImages()
        //     .then(res=> console.log('check here', res.data))
    }

    findOneImage = id => {
        API.findImage(id)
    }

    handleDelete = id => {
        API.deleteImage(id)
            .then(res => {
                this.loadSavedImages();
            })
    }

    deleteImage = id => {
        
    }

render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="text-center display-4 my-4">Mongo File Uploads</h1>
                    {/* <form action="/upload" method="POST" encType="multipart/form-data"> */}
                    <form onSubmit={this.handleSubmit} method="POST" encType="multipart/form-data">   
                        <div className="custom-file mb-3">
                            <input type="file" name="file" id="file" className="custom-file-input"/>
                            <label htmlFor="file" className="custom-file-label">Choose File</label>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                    </form>
                        <hr/>
                       <div className="container">
                            <div className="row">
                            {console.log(this.state.files)}
                                {this.state.files.length ? (
                                <List>    
                                    {this.state.files.map((files) => (
                                        <ListItem key={files.id} id={files.id}>
                                            <div className='col-md-12 image'>
                                                {files.filename}
                                            </div>
                                        </ListItem>
                                    ))}
                                </List>
                                ) : (
                                    <h3 className="noResults">No Results to Display</h3>
                                )}
                            </div>
                       </div>
                </div>
            </div>
        </div>                  
        )
    }
}

    export default ImageUpload;