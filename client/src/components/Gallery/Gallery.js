import React from 'react';
import Gallery from 'react-grid-gallery'
import ImageUpload from '../ImageUpload'
import firebase from 'firebase';

// import { render } from 'react-dom';

class GalleryComponent extends React.PureComponent {
        getFirebaseData = () => {
                const database = firebase.database();
                database.ref('/ImageData').once('value').then(function(snapshot) {
                        const imageObject = snapshot.val();
                        // console.log(imageObject);
                        const keys = Object.keys(imageObject);
                        let image = document.createElement('img');
                        let IMAGES = []

                        for (let i = 0; i < keys.length; i++) {
                                let currentObject = imageObject[keys[i]];
                                // console.log('currentObject', currentObject);
                                image.src = currentObject.url;
                                // console.log('image.src', image.src);                                
                                IMAGES.push(image.src)
                        }
                        console.log('Images', IMAGES);

                })
        }

componentWillMount() {

        this.getFirebaseData();
}

    render() {
        const IMAGES =
[{
        src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        isSelected: true,
        caption: "The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso"
},
{
        src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
        thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
        caption: "The Soul Cannot Survive in the Absence of Art"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        caption: "Art is the Soul of the people"
},

{
        src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
        thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
        thumbnailWidth: 200,
        thumbnailHeight: 200,
        caption: "Art is the Soul of the people"
}]
   
      return (
        <div className="container">
                <div className="container-fluid">
                        <div className="imagesContainer">
                                <Gallery images={IMAGES}/>
                        </div>
                </div>
                <div className="container-fluid">
                        <div className="imageUploader">
                                <ImageUpload />
                        </div>
                </div>
        </div>
      );
    }
   
  }

  export default GalleryComponent;
