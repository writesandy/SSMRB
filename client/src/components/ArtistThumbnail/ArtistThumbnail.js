import React from "react";
import "./ArtistThumbnail.css";
import Artists from "./artistThumbnails.json";


class ArtistThumbnail extends React.Component {
    state = {
        Artists
      };

    render () {
        return (
            <div className="artist-thumbnail-container">
              {this.state.Artists.map(artist => (
                <div className="artist-thumbnail col-lg-3 col-sm-6 col-xs-12" key={artist.id}>
                    <img className="artist-thumbnail-image" src={artist.image} alt="Nature" />
                    <div className="artist-thumbnail-text-block">
                        <h4>{artist.first} {artist.last}</h4>
                        <h6>{artist.title}</h6>
                        <div className="artist-thumbnail-social">
                            <a href={artist.instagram} class="fa fa-instagram"></a>
                            <a href={artist.twitter} class="fa fa-twitter"></a>
                            <a href={artist.linkedin} class="fa fa-linkedin"></a>
                            <a href={artist.website} class="fa fa-globe"></a>
                        </div>
                    </div>
                </div>
              ))}
            </div>            
        ) 
    }
}

 export default ArtistThumbnail;