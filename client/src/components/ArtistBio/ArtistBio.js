import React from "react";
import "./ArtistBio.css";
// import Artists from "../artistSeed.json";
import SocialContact from '../Social and Contact'
import API from "../../utils/API"

class ArtistBio extends React.Component {

    render () {
        return (
            <div className="artistBio col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="artistInfo col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <img className="profileImage" src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    <div>{  }</div>
                    <SocialContact 
                        //instagram={this.props.location.state.artist.instagram}
                        // twitter={this.props.state.artist.twitter}
                        // linkedin={this.state.artist.linkedin}
                        // website={this.state.artist.website}
                        // email = {this.state.artist.email}
                    />
                </div>
                <div className="artistInfo col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    {/* <h2 className="artistProfileName">{this.state.Artists[0].first} {this.state.Artists[0].last}</h2> */}
                    <p className="artistProfileBio"> Culpa id dolor ad nostrud voluptate deserunt id aute ullamco laboris. Labore consequat in adipisicing Lorem consequat. Aliqua excepteur Lorem in fugiat quis eu quis irure dolor nostrud ut officia duis. Fugiat cillum eiusmod esse occaecat. Mollit reprehenderit laboris ut exercitation Lorem reprehenderit aliqua et amet commodo nostrud dolor officia.

Pariatur ipsum commodo laboris eu commodo excepteur. Duis aute cupidatat Lorem sunt nisi ad. Nisi aliqua excepteur anim qui excepteur.

Culpa deserunt laboris laborum ad laborum amet deserunt anim non nisi cillum. Incididunt non reprehenderit ex aliquip duis ad aute laboris consectetur sit nisi. Sunt Lorem nulla adipisicing non aute. Dolore anim incididunt est reprehenderit ex nulla reprehenderit eiusmod quis mollit cupidatat. Enim do officia est sint esse non consequat sit nulla et. Labore sit mollit nisi proident nostrud magna tempor enim eiusmod ipsum anim laborum sunt anim.</p>
                </div>
            </div>
        ) 
    }
}

 export default ArtistBio;