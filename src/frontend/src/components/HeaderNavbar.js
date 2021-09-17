import React, { Component } from 'react'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthService from '../services/auth.service';
import { NavDropdown, Button } from 'react-bootstrap';

class HeaderNavbar extends Component{

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    
        this.state = {
          showRecruiter: false,
          showCandidate: false,
          currentUser: undefined,
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
        <div>
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <Link to={"/"} className="navbar-brand">
                    Jobs Made Easy Portal
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
                        <NavDropdown
                            title="Expert Tips"
                            menuVariant="dark"
                        >
                            <NavDropdown.Item href="/exptiprecr">For Recruiters</NavDropdown.Item>
                            <NavDropdown.Item href="/exptipcand">For Candidates</NavDropdown.Item>
                        </NavDropdown>
                    </li>

                    <li className="nav-item">
                        <Link to={"/help"} className="nav-link">
                            Help
                        </Link>
                    </li>

                    {showRecruiter && (
                        <li className="nav-item">
                            <Link to={"/recruiter"} className="nav-link">
                                Recruiter DashBoard
                            </Link>
                        </li>
                    )}

                    {showCandidate && (
                        <li className="nav-item">
                            <Link to={"/candidate"} className="nav-link">
                                Candidate DashBoard
                            </Link>
                        </li>
                    )}
                </div>
                
                    {currentUser ? (
                         <div class="nav navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/profile"} className="nav-link">
                                    {currentUser.username}
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.logOut}>
                                    LogOut
                                </a>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Button variant="dark">
                                    <Link to={"/login"} className="nav-link">
                                        Login
                                    </Link>
                                </Button>
                            </li>

                            <li className="nav-item">
                                <Button variant="outline-success">
                                    <Link to={"/register"} className="nav-link">
                                        Sign Up
                                    </Link>
                                </Button>
                            </li>
                        </div>
                    )}
            </nav>
        </div>
    )
}
}
export default HeaderNavbar;