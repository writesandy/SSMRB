import React from "react";
import './HeaderNav.css';

const HeaderNav = props => (
    <div className="container-fluid sticky">
        <nav className="navbar navbar-default">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="leftside-Nav">
                    <a className="navbar-brand" href="#">Artist United</a>
                    <a className="navbar-brand" href="#">Community</a>
                    <a className="navbar-brand" href="#">Artist</a>
                    <a className="navbar-brand" href="#">Events</a>
                    <a className="navbar-brand" href="#">Gallery</a>
                </div>

                <div className="rightside-Nav">
                    <a className="navbar-brand login" href="#">Login</a>

                </div>
            </div>

        </nav>
    </div>
)


export default HeaderNav;