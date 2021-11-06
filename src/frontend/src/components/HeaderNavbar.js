import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from '../services/auth.service';
import logo from '../img/Jobs_Made_Ease.png';

class HeaderNavbar extends Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);

        this.state = {
            showRecruiter: false,
            showCandidate: false,
            currentUser: undefined
        };
    }

    componentDidMount() {
        const user = AuthService.getCurrentUser();

        if (user) {
            this.setState({
                currentUser: user,
                showRecruiter: user.roles.includes("RECRUITER"),
                showCandidate: user.roles.includes("CANDIDATE"),
            });
        }
    }

    logOut() {
        AuthService.logout();
    }

    render() {
        const { currentUser, showRecruiter, showCandidate } = this.state;
        return (
            <div className="App-header">
                <nav className="navbar navbar-expand navbar-dark bg-gradient">
                    <Link to={"/home"} className="navbar-brand">
                        <img
                            src={logo}
                            alt="logo"
                            className="logo-img"
                        />
                    </Link>
                    <div className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to={"/home"} className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/about"} className="nav-link">
                                About Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/contact"} className="nav-link">
                                Contact Us
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link to={"/help"} className="nav-link">
                                Help
                            </Link>
                        </li>

                        {showRecruiter && (
                            <li className="nav-item">
                                <Link to={"/recruiter"} className="nav-link">
                                    {currentUser.username}'s dashboard
                                </Link>
                            </li>
                        )}

                        {showCandidate && (
                            <li className="nav-item">
                                <Link to={`/candidate`} className="nav-link">
                                    {currentUser.username}'s DashBoard
                                </Link>
                            </li>
                        )}
                    </div>

                    {currentUser ? (
                        <div class="nav navbar-nav ml-auto">
                            <div className="nav navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to={`/profile/${currentUser.id}`} className="nav-link">
                                        {currentUser.username}'s Profile
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a href="/login" className="nav-link" onClick={this.logOut}>
                                        LogOut
                                    </a>
                                </li>
                            </div>
                        </div>
                    ) : (
                        <div className="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/register"} className="nav-link">
                                    Sign Up
                                </Link>
                            </li>
                        </div>
                    )}
                </nav>
            </div>
        )
    }
}
export default HeaderNavbar;