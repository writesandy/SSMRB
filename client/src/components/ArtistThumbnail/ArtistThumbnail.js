import React from "react";
import "./ArtistThumbnail.css";
<<<<<<< HEAD
import {Link} from 'react-router-dom';
=======
import Artists from "../artistSeed.json";
// import {Link} from 'react-router-dom';
>>>>>>> 9d20412a13fbdd1d44ceebb3f4f87ac16bfdc13b
import SocialIcons from '../Social Icons';
import API from "../../utils/API"


class ArtistThumbnail extends React.PureComponent {
    state = {
        artists: []
      };

      componentDidMount() {
        console.log('it mounted')
<<<<<<< HEAD
        API.getArtists().then(res=> this.setState({artists: res.data}))

=======
        API.getArtists().then(res=> this.setState({Artists: res.data}))
>>>>>>> 9d20412a13fbdd1d44ceebb3f4f87ac16bfdc13b
    }

    render () {
        return (
            <div className="artist-container">
<<<<<<< HEAD
              {this.state.artists.map(artist => (
                <div className="artist-thumbnail-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">  
=======
              {this.state.Artists.map(artist => (
                <div key={artist.id} className="artist-thumbnail-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">  
>>>>>>> 9d20412a13fbdd1d44ceebb3f4f87ac16bfdc13b
                    <div className="artist-thumbnail" key={artist.id}>
                        <img className="artist-thumbnail-image" src={artist.profilePhoto} alt={`${artist.first} ${artist.last}`}/>
                        <div className="artist-thumbnail-text-block">
                        <Link to ={`/ArtistBio/${artist._id}`}><h4 className="artistName">{artist.first} {artist.last}</h4></Link>
                            <h6 className="artistTitle">{artist.title}</h6>
                            <SocialIcons 
                                instagram={artist.instagram}
                                twitter={artist.twitter}
                                linkedin={artist.linkedin}
                                website={artist.website}
                                email={artist.email}
                                phone={artist.phone}
                            />
                        </div>
                    </div>
                </div>
              ))}
            </div>            
        ) 
    }
}

 export default ArtistThumbnail;