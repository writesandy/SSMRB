import React from "react";
import "./ArtistThumbnail.css";
import Artists from "../artistSeed.json";
import SocialIcons from '../Social Icons'


class ArtistThumbnail extends React.PureComponent {
    state = {
        Artists
      };

    render () {
        return (
            <div className="artist-container">
              {this.state.Artists.map(artist => (
                <div className="artist-thumbnail-container col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12">  
                    <div className="artist-thumbnail" key={artist.id}>
                        <img className="artist-thumbnail-image" src={artist.image} alt="" />
                        <div className="artist-thumbnail-text-block">
                            <h4>{artist.first} {artist.last}</h4>
                            <h6>{artist.title.toUpperCase()}</h6>
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