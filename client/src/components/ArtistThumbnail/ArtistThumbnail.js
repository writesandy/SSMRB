import React from "react";
import "./ArtistThumbnail.css";
import {Link} from 'react-router-dom';
import SocialIcons from '../Social Icons';
import API from "../../utils/API"


class ArtistThumbnail extends React.PureComponent {
    state = {
        artists: [],
      };

    componentDidMount() {
        // console.log('it mounted')
        API.getArtists().then(res=> this.setState({artists: res.data}))
        // console.log('this is artists', this.state.artists);
        console.log('state', this.state)
        console.log('props', this.props)
    }

    render () {
        return (
            <div className="artist-container">
              {this.state.artists.map(artist => (
                <div key={artist._id} className="artist-thumbnail-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">  
                    <div className="artist-thumbnail">
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