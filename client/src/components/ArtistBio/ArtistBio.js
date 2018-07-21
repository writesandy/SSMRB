import React from "react";
import "./ArtistBio.css";
// import Artists from "../artistSeed.json";
import SocialContact from '../Social and Contact'
import {BrowserRouter as Router, Link} from "react-router-dom";
import API from "../../utils/API"

class ArtistBio extends React.Component {

    render () {
        return (
            <div className="artistBio col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="artistInfo col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
<<<<<<< HEAD
                    <img className="profileImage" src= {this.props.artistData.profilePhoto} />
=======
                    <img alt='artist profile' className="profileImage" src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
>>>>>>> 9d20412a13fbdd1d44ceebb3f4f87ac16bfdc13b
                    <SocialContact 
                        instagram={this.props.artistData.instagram}
                        twitter={this.props.artistData.twitter}
                        linkedin={this.props.artistData.linkedin}
                        website={this.props.artistData.website}
                        email = {this.props.artistData.email}
                    />
                </div>
                <div className="artistInfo col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h2 className="artistProfileName">{this.props.artistData.first} {this.props.artistData.last}</h2>
                    <p className="artistProfileBio">{this.props.artistData.artistProfileBio}</p>
                </div>
            </div>
        ) 
    }
}

 export default ArtistBio;