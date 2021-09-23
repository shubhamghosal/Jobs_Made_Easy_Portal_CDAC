
import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Button } from 'react-bootstrap';

export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.getRecruiter = this.getRecruiter.bind(this);
    this.getCandidate = this.getCandidate.bind(this);

    this.state = {
      currentUser: undefined,
      showRecruiter: false,
      showCandidate: false,
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
        description: "",
        user: {
          userid: null,
          username: "",
          email: ""
        }
      },
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
    this.getRecruiter(this.props.match.params.id);
    this.getCandidate(this.props.match.params.id);

    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showRecruiter: user.roles.includes("RECRUITER"),
        showCandidate: user.roles.includes("CANDIDATE"),
      });
    }
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
    const { showRecruiter, showCandidate } = this.state;
    const { currentRecruiter } = this.state;
    const { currentCandidate } = this.state;

    return (
      <div className="profile">
        <div className="header-main">
          <p>PROFILE</p>
        </div>
        <div className="card">

          {showRecruiter && (
            <div className="form-group">
              <header className="header-text">
                <h3>
                  <u><strong>Welcome {currentRecruiter.fullname}</strong></u>
                </h3>
              </header>
              <p>
                <strong>Application No:</strong>{" "}
                {currentRecruiter.user.userid}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {currentRecruiter.user.email}
              </p>
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
              <div>
                <Button variant="success" href={`/profile_rec/${currentRecruiter.recrid}`}>Edit Profile</Button>
              </div>
            </div>
          )}
          {showCandidate && (
            <div className="form-group">
              <header className="header-text">
                <h3>
                  <u><strong>Welcome {currentCandidate.fullname}</strong></u>
                </h3>
              </header>
              <p>
                <strong>Application No:</strong>{" "}
                {currentCandidate.user.userid}
              </p>
              <p>
                <strong>Email:</strong>{" "}
                {currentCandidate.user.email}
              </p>
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
              <p>
                <strong>Highest Qualification:</strong>{" "}
                {currentCandidate.hqual}
              </p>
              <p>
                <strong>Specialization:</strong>{" "}
                {currentCandidate.major}
              </p>
              <p>
                <strong>Institute:</strong>{" "}
                {currentCandidate.institute}
              </p>
              <p>
                <strong>Year Of Qualification:</strong>{" "}
                {currentCandidate.yoq}
              </p>
              <p>
                <strong>Qualification Marks:</strong>{" "}
                {currentCandidate.marks} %
              </p>
              <p>
                <strong>Are You Experienced?:</strong>{" "}
                {currentCandidate.exp}
              </p>
              <p>
                <strong>Company Name(if any):</strong>{" "}
                {currentCandidate.company}
              </p>
              <p>
                <strong>Field Of Experience:</strong>{" "}
                {currentCandidate.foexp}
              </p>
              <p>
                <strong>Description:</strong>{" "}
                {currentCandidate.description}
              </p>
              <div>
                <Button variant="success" href={`/profile_cand/${currentCandidate.candid}`}>Edit Profile</Button>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}