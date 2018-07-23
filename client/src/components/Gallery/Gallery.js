import React from 'react';
// import Gallery from 'react-grid-gallery'
import ImageUpload from '../ImageUpload'
import firebase from 'firebase/app';
import "firebase/database";

// import { render } from 'react-dom';

class GalleryComponent extends React.PureComponent {
        constructor(props) {
                super(props);
        this.state = {
                Images: []
        }
}

        getFirebaseData = () => {
                const database = firebase.database();
                let IMAGES = []
                database.ref('/ImageData').once('value').then(function(snapshot) {
                        const imageObject = snapshot.val();
                        const keys = Object.keys(imageObject);
                        // let image = document.createElement('img');
                        // let imageName = document.createElement('img');
                        for (let i = 0; i < keys.length; i++) {
                                let currentObject = imageObject[keys[i]];                         
                                IMAGES.push(currentObject)
                        }
                }).then(
                        // console.log('is it here?', IMAGES)
                        this.setState(prevState => ({
                                Images: [...prevState.Images, IMAGES]
                        }))
                )
        }

componentWillMount() {
        this.getFirebaseData();
}

    render() {
        console.log('Images once rendered', this.state.Images);
        console.log('Urls once rendered', this.state.Images[0] );

//         const IMAGES =
// [{
//         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
//         thumbnailWidth: 200,
//         thumbnailHeight: 200,
//         isSelected: true,
//         caption: "The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso"
// },
// {
//         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
//         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
//         thumbnailWidth: 200,
//         thumbnailHeight: 200,
//         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//         caption: "The Soul Cannot Survive in the Absence of Art"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 200,
//         thumbnailHeight: 200,
//         caption: "Art is the Soul of the people"
// },

// {
//         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
//         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
//         thumbnailWidth: 200,
//         thumbnailHeight: 200,
//         caption: "Art is the Soul of the people"
// }]
   
      return (
        <div className="container pageContentWidth">
            <div className="container-fluid">
                <div id="art-gallery">
                    {this.state.Images.url ? this.state.Images[0].url.map((url, index) => {
                            let boundItemClick = this.handleOpenModal.bind(this, url);
                            return (
                                <div key={index} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"  onClick={boundItemClick}>
                                    <img alt={this.state.title} className="art-img" src={url} />
                                </div>
                            )
                    }): null}
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
