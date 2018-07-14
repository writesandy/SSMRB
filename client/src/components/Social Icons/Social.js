import React from "react";
import "./Social.css";

const SocialIcons = props => (
    <div className="social col-md-12">
        <a href={props.instagram} class="fa fa-instagram socialMin col-md-2 col-md-offset-2"></a>
        <a href={props.twitter} class="fa fa-twitter socialMin col-md-2"></a>
        <a href={props.linkedin} class="fa fa-linkedin socialMin col-md-2"></a>
        <a href={props.website} class="fa fa-globe socialMin col-md-2"></a>
        <a className="fa socialMax">{props.email.toUpperCase()} | {props.phone}</a>
    <ReactTooltip />
    </div>
);

export default SocialIcons;