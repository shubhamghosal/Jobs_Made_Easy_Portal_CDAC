import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import UserService from "../services/user.service";

export default class RecruiterDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getRecruiter().then(
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
      <div className="card">
        <header className="header-text">
          <h3>{this.state.content}</h3>
        </header>
        <div>
          <Button variant="success">New Job Post +</Button>{' '}
        </div>
        <br />
        <div>
          <Button variant="success">Assign Assesment</Button>{' '}
        </div>
        <br />
        <div>
          <Button variant="success">Request BGV</Button>{' '}
        </div>
        <br />
        <div>
          <Button variant="success">Assign Interview</Button>{' '}
        </div>
        <br />
        <div>
          <Button variant="success">Reject Candidate</Button>{' '}
        </div>
        <br />
        <div>
          <Button variant="success">Confirm/Release Offer</Button>{' '}
        </div>
        <br/>
        <div>
        <Button variant="secondary">Update Status</Button>{' '}
        </div>
      </div>
    );
  }
}