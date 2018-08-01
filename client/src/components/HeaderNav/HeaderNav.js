import React from "react";
import './HeaderNav.css';
import {Link} from 'react-router-dom';
import FirebaseAuthUserContext from '../FirebaseAuthUserContext';
import FirebaseSignOut from '../FirebaseSignOut'
import * as routes from '../../constants/routes';
import SignIn from '../SignIn'

const HeaderNav = () => 
    <FirebaseAuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth />
            : <NavigationNonAuth />
        }
    </FirebaseAuthUserContext.Consumer>

const NavigationAuth = () =>
    <div className="container-fluid sticky headerContainer">
        {console.log("we are in NavigationAuth")}
        <nav className="navbar">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="leftside-Nav">
                    <Link to="/" className="navbar-brand">Artist United</Link>
                    {/* <Link to="/Community" className="navbar-brand">Community</Link> */}
                    <Link to="/Artist" className="navbar-brand">Artist</Link>
                    {/* <Link to="/Events" className="navbar-brand">Events</Link> */}
                    <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                </div>
                <div className="rightside-Nav">
                    {/* <li><Link to={routes.HOME}>Home</Link></li> */}
                    <Link to={routes.ACCOUNT} className="navbar-brand">Account</Link>
                    <FirebaseSignOut />
                </div>

               <div className="rightside-Nav">
                    <SignIn />
                </div> 
            </div>
        </nav>
    </div>

const NavigationNonAuth = () =>
    <div className="container-fluid sticky headerContainer">
        {console.log("we are in NavigationNonAuth")}
        <nav className="navbar">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-collapse">
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <div className="leftside-Nav">
                    <Link to="/" className="navbar-brand">Artist United</Link>
                    {/* <Link to="/Community" className="navbar-brand">Community</Link> */}
                    <Link to="/Artist" className="navbar-brand">Artist</Link>
                    {/* <Link to="/Events" className="navbar-brand">Events</Link> */}
                    <Link to="/Gallery" className="navbar-brand">Gallery</Link>
                </div>
                <div className="rightside-Nav">
                    <Link to={routes.SIGN_IN} className="navbar-brand">Sign In</Link>
                    {/* <li><Link to={routes.LANDING}>Landing</Link></li> */}
                </div>
            </div>

        </nav>
    </div>

export default HeaderNav;