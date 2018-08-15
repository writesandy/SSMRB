import React from 'react';
import firebase from 'firebase/app';
import "firebase/database";
import ReactModal from 'react-modal'
import UserGalleryUploader from '../UserGalleryUploader';

class UserGallery extends React.PureComponent {
    constructor(props) {
        super(props);
            this.state = {
                Titles: [],
                Urls: [],
                images:  [],
                userId: '',
            }
            this.handleOpenModal = this.handleOpenModal.bind(this);
            this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    getFirebaseData = () => {
        const database = firebase.database();
        const images = [];
        database.ref(`/${this.props.artistIdfromParent}UserGallery/`).once('value').then((snapshot) => {
                if (snapshot.val() !== null) {
                const imageObject = snapshot.val();
                const keys = Object.keys(imageObject);
                keys.forEach(key => images.push(imageObject[key]))
                } else {
                    console.log("No Images to display")
                }
        }).then(() => {
                this.setState({ 
                    images,
                    userId: this.props.artistIdfromParent
                 })
        })
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.artistIdfromParent !== prevProps.artistIdfromParent) {
            this.getFirebaseData();
        }
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
                        <UserGalleryUploader fetchNewImages={this.getFirebaseData} passingID={this.state.userId} />
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
                <button id="closeLogin" href="#" onClick={this.handleCloseModal}>CLOSE <a id="closeX">X</a></button>
            </ReactModal>
        </div>
                
        
      );
    }
   
  }

  export default UserGallery;