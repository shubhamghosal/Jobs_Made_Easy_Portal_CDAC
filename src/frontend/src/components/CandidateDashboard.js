import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import DashboardService from "../services/dashboard.service";

export default class CandidateDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    DashboardService.getCandidate().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
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
              <Button variant="success">Reject Job</Button>{' '}
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