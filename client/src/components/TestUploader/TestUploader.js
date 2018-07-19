import React, { PureComponent } from 'react';
import './TestUploader.css';
import Dropzone from 'react-dropzone';
import sha1 from 'sha1';
import superagent from 'superagent';
import API from '../../utils/API'
// import { callbackify } from 'util';
class TestUploader extends PureComponent {
    constructor(){
        super()
        this.state = {
            images: []
        }
    }

    uploadFile(files){
        console.log('uploadFile: ')
        const image = files[0]

        const cloudName = 'defmuiudb'
        const url = 'https://api.cloudinary.com/v1_1/'+cloudName+'/image/upload'
        const timestamp = Date.now()/1000
        const uploadPreset = 'xkqbmwl4'
        const paramsStr = 'timestamp='+timestamp+'&upload_preset='+uploadPreset+'ISW12BbUVZt6fFiLKUjjcWrIe0k'
        const signature = sha1(paramsStr)
        const params = {
            'api_key': '484663143232592',
            'timestamp': timestamp,
            'upload_preset': uploadPreset,
            'signature': signature
        }

        let uploadRequest = superagent.post(url)
        uploadRequest.attach('file', image)

        Object.keys(params).forEach((key) => {
            uploadRequest.field(key, params[key])
        })
        uploadRequest.end((err, res) => {
            if (err){
                alert(err)
                return
            }
            // console.log('UPLOAD COMPLETE: '+JSON.stringify(res.body))
            const uploaded = res.body
            let updatedImages = Object.assign([], this.state.images)
            updatedImages.push(uploaded)
            
            this.setState({
                images: updatedImages
            })            
        })
        .then(this.saveImage())

    }

    removeImage(event) {
        event.preventDefault();
        // console.log('removeImage: '+event.target.id)
        let updatedImages = Object.assign([], this.state.images)
        updatedImages.splice(event.target.id, 1)
            this.setState({
                images: updatedImages
            })        
    }

    saveImage = (event) => {
        this.state.images.forEach((elem) => {
            console.log(elem);
            if(elem._id === event.target.id){
                // console.log('event', event.target.id)
                // console.log('elem', elem._id)
                API.saveImage({
                    
                })
                .then(res => {
                    // console.log('this is res', res);
                    this.state.savedArticles.push(res.articleData)
                    this.loadSavedArticles();
                })
                .catch(err => console.log(err));
        }
    })
}

    render() {
        const list = this.state.images.map((image, i) => {
            return(
                <div key={i}>
                    <img className="image" alt={image.original_filename} src={image.secure_url} />
                    <br />
                    <button key={i} id={i} onClick={this.saveImage.bind(this) || null}>Save</button>
                    <button key={i} id={i} onClick={this.removeImage.bind(this)}>Remove</button>
                </div>
            )   
        })
        return (
            <div>
                Images Component 
                <Dropzone onDrop={this.uploadFile.bind(this)} accept=".jpeg,.png" />
                <ul>
                    { list }
                </ul>
            </div>
        )
    }
}

export default TestUploader