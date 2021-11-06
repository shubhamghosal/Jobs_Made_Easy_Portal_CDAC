import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Button } from 'react-bootstrap';
import { Table } from 'semantic-ui-react';

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
              <header className="header-sub">
                <h1>
                  <u><strong>Welcome {currentRecruiter.fullname}</strong></u>
                </h1>
              </header>
              <br />
              <Table>
                <Table.Body>
                  <div className="header-sub">Basic Details</div>
                  <Table.Row>
                    <Table.HeaderCell>Application No:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.user.userid}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Email:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.user.email}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Full Name:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.fullname}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Mobile Number:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.mobile}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Current Location:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.location}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Skills Required:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.skills}</Table.Cell>
                  </Table.Row>
                  <br />
                  <div className="header-sub">Professional Details</div>
                  <Table.Row>
                    <Table.HeaderCell>Company Name:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.compName}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Current Designation:</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.compDesignation}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Total Years Of Experience:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.yoexp}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Office Location:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.offLocation}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Type Of Industry:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.compIndustry}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Other Details:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentRecruiter.description}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <br />
              <div>
                <Button variant="success" href={`/profile_rec/${currentRecruiter.recrid}`}>Edit Profile</Button>
              </div>
            </div>
          )}
          {showCandidate && (
            <div className="form-group">
              <header className="header-text">
                <h1>
                  <strong>Welcome {currentCandidate.fullname}</strong>
                </h1>
              </header>
              <br />
              <Table>
                <Table.Body>
                  <div className="header-sub">Basic Details</div>
                  <Table.Row>
                    <Table.HeaderCell>Application No:{" "}</Table.HeaderCell>
                    <Table.Cell> {currentCandidate.user.userid}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Email:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.user.email}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Full Name:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.fullname}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Mobile Number:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.mobile}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Gender:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.gender}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Current Location:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.location}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Skills Acquired:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.skills}</Table.Cell>
                  </Table.Row>
                  <br />
                  <div className="header-sub">Educational Qualifications</div>
                  <Table.Row>
                    <Table.HeaderCell>Highest Qualification:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.hqual}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Specialization:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.major}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Institute:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.institute}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Year Of Qualification:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.yoq}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Qualification Marks:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.marks} %</Table.Cell>
                  </Table.Row>
                  <br />
                  <div className="header-sub">Professional Details</div>
                  <Table.Row>
                    <Table.HeaderCell>Are You Experienced?:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.exp}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Company Name(if any):{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.company}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Field Of Experience:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.foexp}</Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.HeaderCell>Description:{" "}</Table.HeaderCell>
                    <Table.Cell>{currentCandidate.description}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
              <br />
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