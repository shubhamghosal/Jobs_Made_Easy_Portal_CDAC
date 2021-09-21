
import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.getRecruiter = this.getRecruiter.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      currentRecruiter: {
        id: null,
        recrid: null,
        fullname: "",
        mobile: "",
        gender: "",
        location: "",
        skills: "",
        compName: "",
        compDesignation: "",
        yoexp: "",
        offLocation: "",
        compIndustry: "",
        description: ""
      },
      message: ""
    };
  }

  componentDidMount() {
    this.getRecruiter(this.props.match.params.id);
  }

  getRecruiter(id) {
    UserService.viewRecruiter(id)
      .then(response => {
        this.setState({
          currentRecruiter: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentUser } = this.state;
    const { currentRecruiter } = this.state;

    return (
      <div className="card">
        <header className="header-text">
          <h3>
            <u><strong>{currentUser.username}'s</strong> Profile</u>
          </h3>
        </header>
        <div className="profile">
          <p>
            <strong>Application No:</strong>{" "}
            {currentRecruiter.recrid}
          </p>
          <p>
            <strong>Email:</strong>{" "}
            {currentUser.email}
          </p>
          <p>
            <strong>Authorities: </strong>
            {currentUser.roles &&
              currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
          </p>
          <div>
            {currentRecruiter ? (
              <div className="recruiter-profile">
                <p>
                  <strong>Full Name:</strong>{" "}
                  {currentRecruiter.fullname}
                </p>
                <p>
                  <strong>Mobile Number:</strong>{" "}
                  {currentRecruiter.mobile}
                </p>
                <p>
                  <strong>Gender:</strong>{" "}
                  {currentRecruiter.gender}
                </p>
                <p>
                  <strong>Current Location:</strong>{" "}
                  {currentRecruiter.location}
                </p>
                <p>
                  <strong>Skills Required:</strong>{" "}
                  {currentRecruiter.skills}
                </p>
                <p>
                  <strong>Company Name:</strong>{" "}
                  {currentRecruiter.compName}
                </p>
                <p>
                  <strong>Current Designation:</strong>{" "}
                  {currentRecruiter.compDesignation}
                </p>
                <p>
                  <strong>Total Years Of Experience:</strong>{" "}
                  {currentRecruiter.yoexp}
                </p>
                <p>
                  <strong>Office Location:</strong>{" "}
                  {currentRecruiter.offLocation}
                </p>
                <p>
                  <strong>Type Of Industry:</strong>{" "}
                  {currentRecruiter.compIndustry}
                </p>
                <p>
                  <strong>Other Details:</strong>{" "}
                  {currentRecruiter.description}
                </p>
              </div>
            ) : (
              <br />
            )}
        </div>
        </div>
      </div>
    );
  }
}