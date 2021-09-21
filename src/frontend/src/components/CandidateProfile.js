
import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export default class CandidateProfile extends Component {
  constructor(props) {
    super(props);
    this.getCandidate = this.getCandidate.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      currentCandidate: {
        id: null,
        candid: null,
        fullname: "",
        mobile: "",
        gender: "",
        location: "",
        skills: "",
        hqual: "",
        major: "",
        institute: "",
        yoq: "",
        marks: "",
        exp: "",
        yoexp: "",
        company: "",
        foexp: "",
        description: "",
        user: {
          userid: null,
          username: "",
          email: ""
        }
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getCandidate(this.props.match.params.id);
  }

  getCandidate(id) {
    UserService.viewCandidate(id)
      .then(response => {
        this.setState({
          currentCandidate: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;
    const { currentCandidate } = this.state;

    return (
      <div className="card">
        <header className="header-text">
          <h3>
            <u><strong>{currentCandidate.user.username}'s</strong> Profile</u>
          </h3>
        </header>
        <div className="profile">
          <p>
            <strong>Application No:</strong>{" "}
            {currentCandidate.candid}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {currentCandidate.user.email}
          </p>
          <p>
            <strong>Authorities: </strong>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
          </p>
          <div>
            {currentCandidate ? (
              <div className="recruiter-profile">
                <p>
                  <strong>Full Name:</strong>{" "}
                  {currentCandidate.fullname}
                </p>
                <p>
                  <strong>Mobile Number:</strong>{" "}
                  {currentCandidate.mobile}
                </p>
                <p>
                  <strong>Gender:</strong>{" "}
                  {currentCandidate.gender}
                </p>
                <p>
                  <strong>Current Location:</strong>{" "}
                  {currentCandidate.location}
                </p>
                <p>
                  <strong>Skills Acquired:</strong>{" "}
                  {currentCandidate.skills}
                </p>
              </div>
            ) : (
              <br />
            )}
          </div>
          <button className="alert-success" href="/edit">Edit Profile</button>
        </div>
      </div>

    );

  }
}