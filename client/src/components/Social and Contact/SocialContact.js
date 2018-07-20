import React from "react";
import ReactTooltip from "react-tooltip";
import "./SocialContact.css";

const SocialContact = props => (
    <div className="socialContact">
        <a href={props.instagram} className="fa fa-instagram socialContactMin col-md-1 col-sm-1 col-xs-1">Instagram</a>
        <a href={props.twitter} className="fa fa-twitter socialContactMin col-md-1 col-sm-1 col-xs-1">Twitter</a>
        <a href={props.linkedin} className="fa fa-linkedin socialContactMin col-md-1 col-sm-1 col-xs-1">LinkedIn</a>
        <a href={props.website} className="fa fa-globe socialContactMin col-md-1 col-sm-1 col-xs-1"></a>
        <a className="fa col-md-8 col-sm-8 col-xs-8 socialContactMax">{props.email}</a>
    <ReactTooltip />
    </div>
);

export default SocialContact;
