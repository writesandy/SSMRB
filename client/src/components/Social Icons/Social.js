import React from "react";
import "./Social.css";

const SocialIcons = props => (
    <div className="social col-md-12">
        <a href={props.instagram} class="fa fa-instagram socialMin col-xs-3"></a>
        <a href={props.twitter} class="fa fa-twitter socialMin col-xs-3"></a>
        <a href={props.linkedin} class="fa fa-linkedin socialMin col-xs-3"></a>
        <a href={props.website} class="fa fa-globe socialMin col-xs-3"></a>
    </div>
);

export default SocialIcons;
