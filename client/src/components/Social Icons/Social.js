import React from "react";
import "./Social.css";
import {Link} from 'react-router-dom';


const SocialIcons = props => (
    <div className="social col-md-12">
        <a href={props.instagram} className="fa fa-instagram socialMin col-xs-3"></a>
        <a href={props.twitter} className="fa fa-twitter socialMin col-xs-3"></a>
        <a href={props.linkedin} className="fa fa-linkedin socialMin col-xs-3"></a>
        <a href={props.website} className="fa fa-globe socialMin col-xs-3"></a>
    </div>
);

export default SocialIcons;
