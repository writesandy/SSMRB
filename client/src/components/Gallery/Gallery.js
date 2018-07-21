import React from 'react';
import Gallery from 'react-grid-gallery'
// import ImageUpload from '../ImageUpload'

// import { render } from 'react-dom';

class GalleryComponent extends React.PureComponent {
    
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
}]
   
      return (
        <div className="container pageContentWidth">
                <div className="images">
                        <Gallery images={IMAGES}/>
                </div>
        </div>
      );
    }
   
  }

  export default GalleryComponent;
