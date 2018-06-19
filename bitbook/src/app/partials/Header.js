import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../logIn/Login';

const Header = props => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light header">
                <div className="collapse navbar-collapse">
                    <h4 className="h4header">Facebook</h4>
                </div>
                <div className="right">
                    <ul className="navbar-nav">
                        <li className="nav-item headerFeed">
                            <Link className="nav-link" to="/Feed">Feed</Link> </li>
                        <li className="nav-item" />
                        <li className="nav-item headerPeople">
                            <Link className="nav-link" to="/People">People</Link></li>
                        <li className="nav-item headerProfile">
                            <Link className="nav-link" to="/Profile">Profile</Link>
                        </li>
                        <li className="nav-item headerLogin">
                            <Link className="nav-link" to="/Login">Log In</Link>
                        </li>
                        {/* <li className="nav-item or">
                            <Link className="nav-link or" to="/Login">or</Link>
                        </li> */}
                        <li className="nav-item headerRegister">
                            <Link className="nav-link" to="/Register">Register</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};
export default Header;
