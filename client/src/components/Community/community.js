import React from 'react';
import './community.css';
import 'bootstrap/dist/css/bootstrap.css';
import beardImage from './Image.Beard.png';



   
const Community = () => (
  <div class='col-sm-6'>Flavor Text About our Project. 
  Come see our favorite artists and their projects. 
  These are people who are really talented and have a community to share. 
  <img src={beardImage} className="beard-image" alt="beard-image" />
  <button style={{ float: "left" }} className="btn btn-success"> Join </button>
  <button style={{ float: "left" }} className="btn btn-success" > Learn More</button>
<div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron">
    
      </div>
</div>
)

export default Community;
