import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';
import SignIn from '../SignIn'

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
                    <Link to="/" className="navbar-brand">Artist United</Link>
                    <Link to="/Community" className="navbar-brand">Community</Link>
                    <Link to="/Artist" className="navbar-brand">Artist</Link>
                    <Link to="/Events" className="navbar-brand">Events</Link>
                    <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                </div>

                <div className="rightside-Nav">
                    <SignIn />
                </div>
            </div>

        </nav>
    </div>
)


export default HeaderNav;