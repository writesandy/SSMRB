import React from "react";
import ReactTooltip from 'react-tooltip'
import "./SocialContact.css";

const SocialContact = props => (
    <div className="socialContact">
        <a href={props.instagram} class="fa fa-instagram socialContactMin col-md-1 col-sm-1 col-xs-3"></a>
        <a href={props.twitter} class="fa fa-twitter socialContactMin col-md-1 col-sm-1 col-xs-3"></a>
        <a href={props.linkedin} class="fa fa-linkedin socialContactMin col-md-1 col-sm-1 col-xs-3"></a>
        <a href={props.website} class="fa fa-globe socialContactMin col-md-1 col-sm-1 col-xs-3"></a>
        <a className="fa col-md-8 col-sm-8 col-xs-12 socialContactMax">{props.email.toUpperCase()} | {props.phone}</a>
    <ReactTooltip />
    </div>
);

export default SocialContact;