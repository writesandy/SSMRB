import React from 'react';
import ImageUpload from '../ImageUpload'
import firebase from 'firebase/app';
import "firebase/database";
import ReactModal from 'react-modal'

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
                // console.log('props here?', this.props)

                const database = firebase.database();
                const images = [];
                database.ref('/ImageData').once('value').then((snapshot) => {
                        if (snapshot.val() !== null) {                        
                        const imageObject = snapshot.val();
                        const keys = Object.keys(imageObject);
                        // console.log(keys)
                        keys.forEach(key => images.push(imageObject[key]))
                        } else {
                                console.log("No Images to display")
                        } 
                }).then(() => {
                        this.setState({ images })
                })
        }

componentWillMount() {
        this.getFirebaseData();
}

handleOpenModal (index, e) {
        this.setState({
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
        <div className="container pageContentWidth">
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