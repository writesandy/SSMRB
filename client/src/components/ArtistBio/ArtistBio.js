import React from "react";
import "./ArtistBio.css";
import Artists from "../artistSeed.json";
import SocialContact from '../Social and Contact'

class ArtistBio extends React.PureComponent {
    state = {
        Artists
      };

    render () {
        return (
            <div className="artistBio row">
                <div className="BioLeft col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <div >
                        <img className="profileImage" src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"/>
                    </div>
                    <SocialContact 
                        instagram={this.state.Artists[0].instagram}
                        twitter={this.state.Artists[0].twitter}
                        linkedin={this.state.Artists[0].linkedin}
                        website={this.state.Artists[0].website}
                        email={this.state.Artists[0].email}
                        phone={this.state.Artists[0].phone}
                    />
                </div>
                <div className="BioRight col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <h3>{this.state.Artists[0].first} {this.state.Artists[0].last}</h3>
                    <h5>Occaecat duis est adipisicing quis excepteur ad aliqua culpa enim excepteur cillum esse aliqua veniam.</h5>
                    <p>Ullamco esse irure exercitation officia aliquip qui eiusmod excepteur labore esse duis occaecat. Irure minim sint aliquip elit sit officia dolore. Occaecat occaecat quis nostrud veniam occaecat deserunt aliquip officia tempor dolore esse ut. Do laboris fugiat elit eiusmod occaecat cupidatat sit. Tempor anim aliqua velit excepteur nostrud adipisicing amet tempor. Adipisicing aute exercitation Lorem occaecat ipsum velit ex ullamco eiusmod reprehenderit. Esse ad Lorem minim enim sunt qui.
                        Est exercitation eiusmod elit officia fugiat laborum qui consequat. Tempor nulla proident sint sunt amet id non irure magna minim qui cupidatat pariatur aliquip. Eu fugiat incididunt ex ipsum laboris sunt eu irure aute ullamco id magna. Ipsum duis elit excepteur Lorem officia qui. Duis ut ipsum enim commodo nisi labore elit veniam cupidatat dolor incididunt dolore occaecat adipisicing. Deserunt ad velit exercitation qui excepteur. Reprehenderit do ad id non veniam deserunt reprehenderit elit excepteur.
                    </p>
                </div>
            </div>
        ) 
    }
}

 export default ArtistBio;