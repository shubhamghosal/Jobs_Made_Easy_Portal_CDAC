import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import DashboardService from "../services/dashboard.service";

export default class RecruiterDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    DashboardService.getRecruiter().then(
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
      <div>
        <div className="header-main">
          <p>DASHBOARD</p>
        </div>
        <br />
        <div className="card">
          <div>
            <div className="mini-card">
              <div className="header-sub">
                <p>Create New Job Post</p>
              </div>
              <br />
              <Button variant="success" href="create/job">New Job Post +</Button>{' '}
            </div>
            <br />
          </div>
          <br />
          <div className="card">
            <div className="header-sub">
              <p>Job Posting Updates</p>
            </div>
          </div>
          <br />
          <div className="footer-card">
            <span className="form-group">
              <Button variant="success">Assign Assesment</Button>
            </span>
            <span className="form-group">
              <Button variant="success">Request BGV</Button>
            </span>
            <span className="form-group">
              <Button variant="success">Assign Interview</Button>
            </span>
            <span className="form-group">
              <Button variant="success">Release Offer</Button>
            </span>
            <span className="form-group">
              <Button variant="success">Reject Candidate</Button>
            </span>
            <span className="form-group">
              <Button variant="success">Update Status</Button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}