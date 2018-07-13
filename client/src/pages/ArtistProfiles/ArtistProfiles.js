import React from 'react';
import GalleryComponent from '../../components/Gallery'
import './ArtistProfiles.css'
import Artists from '../../components/artistSeed.json'
import ReactModal from 'react-modal'


class ArtistProfiles extends React.Component {

    constructor () {
        super();
        this.state = {
            showModal: false,
            Artists
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal () {
        this.setState({ showModal: true });
      }
      
    handleCloseModal () {
    this.setState({ showModal: false });
    };

    
    render () {
        return (
            <div>
            {/* Header */}
                <h2>HEADER</h2>
            {/* ArtistBio */}
                <h2>Artist Image and Bio</h2>
            {/* Gallery */}
                <div id="art-gallery">
                    {this.state.Artists[0].art.map ((art, index) => {
                            return (
                                <div key={index} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"  onClick={this.handleOpenModal} style={{height:200}}>
                                    <img className="art-img" src={art} />
                                </div>
                            )
                    })}
                </div>
                {/* Art Feature Modal */}
                <ReactModal isOpen={this.state.showModal}>
                    <img id="feature-image" src="https://images.pexels.com/photos/900102/pexels-photo-900102.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                    <button className="close-btn" onClick={this.handleCloseModal}><i class="fa fa-close"/></button>
                </ReactModal>
             {/* Footer */}
            </div>            
        )

    }

}

export default ArtistProfiles;