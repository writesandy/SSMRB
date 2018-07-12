import React from "react";
import "./Social.css";

const SocialIcons = props => (
    <div className="social">
        <a href={props.instagram} class="fa fa-instagram"></a>
        <a href={props.twitter} class="fa fa-twitter"></a>
        <a href={props.linkedin} class="fa fa-linkedin"></a>
        <a href={props.website} class="fa fa-globe"></a>
    </div>
);

export default SocialIcons;