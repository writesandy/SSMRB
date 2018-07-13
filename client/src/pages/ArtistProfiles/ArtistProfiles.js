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
    }
    
    render () {
        return (
            <div>
            {/* Header */}
                <h2>HEADER</h2>
            {/* ArtistBio */}
                <h2>Artist Image and Bio</h2>
            {/* Gallery */}
                <div>
                    {this.state.Artists[0].art.map ((art, index) => {
                            return (<img className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12" src={art} id={index} onClick={this.handleOpenModal}/>)
                    })}
                </div>
                {/* Art Feature Modal */}
                <ReactModal 
                isOpen={this.state.showModal}
                >
                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
             {/* Footer */}
            </div>            
        )

    }

}

export default ArtistProfiles;