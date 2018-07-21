import React from "react";
import "./ArtistThumbnail.css";
import Artists from "../artistSeed.json";
<<<<<<< HEAD
import {Link} from 'react-router-dom';
import SocialIcons from '../Social Icons';
import API from "../../utils/API"

=======
import SocialIcons from '../Social Icons'
import API from '../../utils/API'
>>>>>>> 30015b8fac7550ebd7a6c52320af79bb17608d7a


class ArtistThumbnail extends React.PureComponent {
    state = {
        Artists
      };

<<<<<<< HEAD
      componentDidMount() {
        console.log('it mounted')
        API.getArtists().then(res=> this.setState({Artists: res.data}))

    }


=======
    componentDidMount() {
        console.log('it mounted')
        API.getArtists().then(res=> this.setState({Artists: res.data}))
    }

>>>>>>> 30015b8fac7550ebd7a6c52320af79bb17608d7a
    render () {
        return (
            <div className="artist-container">
              {this.state.Artists.map(artist => (
                <div className="artist-thumbnail-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">  
                    <div className="artist-thumbnail" key={artist.id}>
                        <img className="artist-thumbnail-image" src={artist.profilePhoto} alt="" />
                        <div className="artist-thumbnail-text-block">
                            <h4 className="artistName">{artist.first} {artist.last}</h4>
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