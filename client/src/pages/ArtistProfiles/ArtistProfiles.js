import React from 'react';
import './ArtistProfiles.css'
import Artists from '../../components/artistSeed.json'
import ArtistBio from '../../components/ArtistBio'
import ReactModal from 'react-modal'
// import API from "../../utils/API"


class ArtistProfiles extends React.PureComponent {

    constructor () {
        super();
        this.state = {
            showModal: false,
            modalArt:"",
            Artists
        };
        
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal (art, e) {
        this.setState({modalArt:`${art}`});
        this.setState({ showModal: true });
      }
      
    handleCloseModal () {
    this.setState({ showModal: false });
    };



    
    render () {
        console.log(this.state);
        return (
            <div>
            {/* ArtistBio */}
                <ArtistBio/>
            {/* Gallery */}
                <div id="art-gallery">
                    {this.state.Artists[0].art.map ((art, index) => {
                            let boundItemClick = this.handleOpenModal.bind(this,art);
                            return (
                                <div key={index} className="art col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12"  onClick={boundItemClick}>
                                    <img alt="art" className="art-img" src={art} />
                                </div>
                            )
                    })}
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
                    <img alt='featured' id="feature-image" src={this.state.modalArt} />
                    <a id="closeLogin" href="#" onClick={this.handleCloseModal}>CLOSE <a id="closeX">X</a></a>
                </ReactModal>
             {/* Footer */}
            </div>            
        )

    }

}

export default ArtistProfiles;