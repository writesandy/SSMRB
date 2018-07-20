import React from 'react';
import './Community.css';
import beardImage from './Image.Beard.png';



   
const Community = () => (
  <div className='flavor col-sm-6'>The Gallery represeents the finest arts and crafts created in our local 
  artist community. 
  We represent art, for which a portion or all of the proceeds goes toward worthwhile causes.
  <img src={beardImage} className="beard-image" alt="beard-image" />
  <button style={{ float: "left" }} className="btn btn-success"> Join </button>
  <button style={{ float: "left" }} className="btn btn-success" > Learn More</button>
<div style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
    className="jumbotron">
    
      </div>
</div>
)

export default Community;
