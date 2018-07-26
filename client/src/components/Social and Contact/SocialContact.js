import React from "react";
import ReactTooltip from "react-tooltip";
import "./SocialContact.css";

const SocialContact = props => (
    <div className="socialContact">
        <i href={props.instagram} className="fa fa-instagram socialContactMin col-md-1 col-sm-1 col-xs-1"> </i>
        <i href={props.twitter} className="fa fa-twitter socialContactMin col-md-1 col-sm-1 col-xs-1"> </i>
        <i href={props.linkedin} className="fa fa-linkedin socialContactMin col-md-1 col-sm-1 col-xs-1"> </i>
        <i href={props.website} className="fa fa-globe socialContactMin col-md-1 col-sm-1 col-xs-1"> </i>
        {/* Below: email shouldn't be an a tag but it can't be an i tag -- h6? */}
        <a className="fa col-md-8 col-sm-8 col-xs-8 socialContactMax">{props.email}</a>
    <ReactTooltip />
    </div>
);

export default SocialContact;
