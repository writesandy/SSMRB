import React from "react";
import "./SocialContact.css";

const SocialContact = props => (
    <div className="socialContact">
        <a href={props.instagram} className="fa fa-instagram socialContactMin col-md-1 col-sm-1 col-xs-1"></a>
        <a href={props.twitter} className="fa fa-twitter socialContactMin col-md-1 col-sm-1 col-xs-1"></a>
        <a href={props.linkedin} className="fa fa-linkedin socialContactMin col-md-1 col-sm-1 col-xs-1"></a>
        <a href={props.website} className="fa fa-globe socialContactMin col-md-1 col-sm-1 col-xs-1"></a>
        {/* Below: email shouldn't be an a tag but it can't be an i tag -- h6? */}
        <a className="fa col-md-8 col-sm-8 col-xs-8 socialContactMax">{props.email}</a>
    </div>
);

export default SocialContact;
