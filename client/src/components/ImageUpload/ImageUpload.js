import React, { Component } from 'react';
import './ImageUpload.css';
import API from '../../utils/API'

class ImageUpload extends Component {

    componentDidMount() {
        API.getImages().then(res=> console.log('check here', res.data))
    }

render() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 m-auto">
                    <h1 className="text-center display-4 my-4">Mongo File Uploads</h1>
                    <form action="/upload" method="POST" encType="multipart/form-data">
                        <div className="custom-file mb-3">
                            <input type="file" name="file" id="file" className="custom-file-input"/>
                            <label htmlFor="file" className="custom-file-label">Choose File</label>
                        </div>
                        <input type="submit" value="Submit" className="btn btn-primary btn-block"/>
                    </form>
                        <hr/>
                        {/* <% if(files){ %>
                            <% files.forEach(function(file) { %>
                                <div class="card card-body mb-3">
                                    <% if(file.isImage) { %>
                                        <img src="image/<%= file.filename %>" alt="">
                                    <% } else { %>
                                        <%= file.filename %>
                                    <% } %>
                                    <form method= "POST" action="/files/<%= file._id %>?_method=DELETE">
                                    <button class="btn btn-danger btn-block mt-4">Delete</button>
                                    </form>
                                </div>
                            <% }) %>
                        <% } else { %>
                            <p>No files to show</p>
                        <% } %> */}
                </div>
            </div>
        </div>                  
        )
    }
}

    export default ImageUpload;