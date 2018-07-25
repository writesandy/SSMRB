import React from 'react';
// import Gallery from 'react-grid-gallery'
import ImageUpload from '../ImageUpload'
import firebase from 'firebase/app';
import "firebase/database";
import ReactModal from 'react-modal'

// import { render } from 'react-dom';

class GalleryComponent extends React.PureComponent {
        constructor(props) {
                super(props);
        this.state = {
                Titles: [],
                Urls: [],
                images:  []
        }
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
}

        getFirebaseData = () => {
                const database = firebase.database();
                const images = [];
                database.ref('/ImageData').once('value').then((snapshot) => {
                        console.log('snapshot.val', snapshot.val())
                        const imageObject = snapshot.val();
                        const keys = Object.keys(imageObject);
                        console.log(keys)
                        // let image = document.createElement('img');
                        // let imageName = document.createElement('img');
                        // for (let i = 0; i < keys.length; i++) {
                        //         let currentObject = imageObject[keys[i]];                         
                        //         images.push(currentObject)
                        // }
                        keys.forEach(key => images.push(imageObject[key]))
                }).then(() => {
                        this.setState({ images })
                        // console.log('IMAGES', IMAGES)
                        // console.log('state Images', Images)
                })
        }

componentWillMount() {
        this.getFirebaseData();
}

handleOpenModal (index, e) {
        this.setState({
                // modalArt:`${art}`,
                showModal: true,
                pickedImg: {...this.state.images[index]}
        });
      }
      
    handleCloseModal () {
    this.setState({ showModal: false });
    };


    render() {
        let pics, modalPicUrl, modalPicTitle;
        
        if (this.state.images) {
                pics = this.state.images.map((image, i) => {
                        return (
                                // using an Object, we will be able to pass all the information to the modal.
                                <div key={image.name} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"  onClick={() => this.handleOpenModal(i)}>
                                    <img alt={image.title} className="art-img" src={image.url} />
                                </div>
                            )
                })
        }
        if (this.state.pickedImg) {
                modalPicUrl = this.state.pickedImg.url
                modalPicTitle = this.state.pickedImg.title
        }
      return (
        <div className="container">
                <div className="container-fluid">
                <div id="art-gallery">
                    {pics}
                </div>
                </div>
                <div className="container-fluid">
                        <div className="imageUploader">
                                <ImageUpload fetchNewImages={this.getFirebaseData}/>
                        </div>
                </div>
                {/* Art Feature Modal */}
        <ReactModal isOpen={this.state.showModal} style={
                {content: {
                    position: 'relative',
                    top: 'unset',
                    left: 'unset',
                    right: 'unset',
                    bottom: 'unset',
                    border: '1px solid grey',
                    background: 'white',
                    overflow: 'hidden',
                    borderRadius: '0px',
                    outline: 'none',
                    padding: '0px',
                    width: 'fit-content',
                    height: 'fit-content',
                    margin: '80px auto',
                    maxHight: '65%',
                    maxWidth: '65%',
                }
            }}>
            
                <img alt={modalPicTitle} id="feature-image" src={modalPicUrl} />
                <a id="closeLogin" href="#" onClick={this.handleCloseModal}>CLOSE <a id="closeX">X</a></a>
            </ReactModal>
        </div>
                
        
      );
    }
   
  }

  export default GalleryComponent;

  // import React from 'react';
// // import Gallery from 'react-grid-gallery'
// import ImageUpload from '../ImageUpload'
// import firebase from 'firebase/app';
// import "firebase/database";

// // import { render } from 'react-dom';

// class GalleryComponent extends React.PureComponent {
//         constructor(props) {
//                 super(props);
//         this.state = {
//                 imageTitle: "",
//                 generatedName: "",
//                 imageURL: ""
//         }
// }
//         getFirebaseData = () => {
//                 const ref = firebase.database().ref();

//                 // ref.on('value', function(snapshot) {
//                 //         console.log(snapshot.val());
//                 // }, function (error) {
//                 //         console.log('error: ' + error.code)
//                 // })
//                 // ref.on('child_added', childSnapshot => {
//                 //         console.log(childSnapshot.val());
//                 //         this.setState = ({
//                 //                 imageTitle: childSnapshot.val().title,
//                 //                 generatedName: childSnapshot.val().generatedName,
//                 //                 imageURL: childSnapshot.val().url
//                 //         })
//                 // })

//                 const database = firebase.database();
//                 let IMAGES = []
//                 database.ref('/ImageData').once('value')
//                 .then(snapshot => {
//                         const imageObject = snapshot.val();
//                         const keys = Object.keys(imageObject);
//                         // let image = document.createElement('img');
//                         // let imageName = document.createElement('img');
//                         // console.log('this is keys', keys)
//                         for (let i = 0; i < keys.length; i++) {
//                                 let currentObject = imageObject[keys[i]];                         
//                                 // console.log(currentObject);
//                                 IMAGES.push(currentObject)
//                         }
//                 }).then(data => {
//                         // console.log('is it here?', IMAGES)
//                         this.setState(prevState => ({
//                                 Images: [...prevState.Images, IMAGES]
//                         }))
//                 })
//         }

// componentWillMount() {
//         this.getFirebaseData();
// }

//     render() {
//         console.log('Images once rendered', this.state);
//         console.log('Urls once rendered', this.state.Images[0]);

// //         const IMAGES =
// // [{
// //         src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
// //         thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
// //         thumbnailWidth: 200,
// //         thumbnailHeight: 200,
// //         isSelected: true,
// //         caption: "The purpose of art is washing the dust of daily life off our souls. - Pablo Picasso"
// // },
// // {
// //         src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
// //         thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
// //         thumbnailWidth: 200,
// //         thumbnailHeight: 200,
// //         tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
// //         caption: "The Soul Cannot Survive in the Absence of Art"
// // },

// // {
// //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
// //         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
// //         thumbnailWidth: 200,
// //         thumbnailHeight: 200,
// //         caption: "Art is the Soul of the people"
// // },

// // {
// //         src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
// //         thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
// //         thumbnailWidth: 200,
// //         thumbnailHeight: 200,
// //         caption: "Art is the Soul of the people"
// // }]
   
//       return (
//         <div className="container">
//                 <div className="container-fluid">
//                 <div id="art-gallery">
//                     {this.state.imageURL ? this.state.imageURL.map((url, index) => {
//                             let boundItemClick = this.handleOpenModal.bind(this, url);
//                             return (
//                                 <div key={index} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"  onClick={boundItemClick}>
//                                     <img alt={this.state.imageTitle} className="art-img" src={url} />
//                                 </div>
//                             )
//                     }): null}
//                 </div>
//                 </div>
//                 <div className="container-fluid">
//                         <div className="imageUploader">
//                                 <ImageUpload />
//                         </div>
//                 </div>
//         </div>
//       );
//     }
   
//   }

//   export default GalleryComponent;