import React from "react";
import "./ArtistBio.css";
import Artists from "../artistSeed.json";
import SocialContact from '../Social and Contact'

class ArtistBio extends React.Component {
    state = {
        Artists
      };

    render () {
        return (
            <div className="artistBio col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="artistInfo col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img className="profileImage" src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <SocialContact 
                        instagram={this.state.Artists[0].instagram}
                        twitter={this.state.Artists[0].twitter}
                        linkedin={this.state.Artists[0].linkedin}
                        website={this.state.Artists[0].website}
                        email = {this.state.Artists[0].email}
                    />
                </div>
            </div>
        ) 
    }
}

 export default ArtistBio;