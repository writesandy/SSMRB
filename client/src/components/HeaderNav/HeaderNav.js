import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';

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
                    <Link to="/" className="navbar-brand" href="#">Artist United</Link>
                    <Link to="/Community" className="navbar-brand" href="#">Community</Link>
                    <Link to="/Artist" className="navbar-brand" href="#">Artist</Link>
                    <Link to="/Events" className="navbar-brand" href="#">Events</Link>
                    <Link to="/Gallery" className="navbar-brand" href="#">Gallery</Link>
                </div>

                <div className="rightside-Nav">
                    <Link to="/SignIn" className="navbar-brand login" href="#">Login</Link>

                </div>
            </div>

        </nav>
    </div>
)


export default HeaderNav;