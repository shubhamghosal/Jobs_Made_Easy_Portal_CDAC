import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default class CandidateDashboard extends Component {
  constructor(props) {
    super(props);
    this.trackJobs = this.trackJobs.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      currentApplication: [],
      currentJob: null,
      currentIndex: -1
    };
  }

  componentDidMount() {
    this.trackJobs(this.state.currentUser.id);
  }

  setActiveJob(job, index) {
    this.setState({
      currentJob: job.job,
      currentIndex: index
    });
  }

  trackJobs(id) {
    DashboardService.trackJobApplication(id)
      .then(response => {
        this.setState({
          currentApplication: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  render() {
    const { currentApplication, currentIndex, currentJob } = this.state;
    return (
      <div className="container">
        <div className="header-main">
          <p>DASHBOARD</p>
        </div>
        <div className="card">
          <div>
            <div className="mini-card">
              <div className="header-sub">
                <p>Job Search</p>
              </div>
              <br />
              <Button variant="success" href="get/job">Search and Apply</Button>
            </div>
            <br />
          </div>
          <br />
          <div className="card">
            <div className="header-sub">
              <p>Jobs Applied Updates</p>
            </div>
            <div>
              <ul className="list-group">
                {currentApplication &&
                  currentApplication.map((job, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveJob(job, index)}
                      key={index}
                    >
                      {job.job.jobTitle}
                    </li>
                  ))}
              </ul>
            </div>
            <br />
            <div>
              {currentJob ? (
                <div>
                  <Popup trigger={<button type="button" className="btn btn-success" id="status-button">Check Status</button>} position="right center">
                    <div><strong>Application Accepted !!</strong></div>
                  </Popup>
                  <button type="button" className="btn btn-danger" id="status-button">Reject Job</button>
                </div>
              ) : (
                <div>
                  <br />
                  <b>Click on the applied Job to track status</b>
                </div>
              )}
            </div>
          </div>
          <br />
          <div className="footer-card">
            <span>
              <Button variant="success">Interview Status</Button>{' '}
            </span>
            <span>
              <Button variant="success">Fill Pending BGV</Button>{' '}
            </span>
            <span>
              <Button variant="success">Confirm Joining</Button>{' '}
            </span>
            <span>
              <Button variant="success">Download Offer</Button>{' '}
            </span>
          </div>
        </div>
      </div>
    );
  }
}