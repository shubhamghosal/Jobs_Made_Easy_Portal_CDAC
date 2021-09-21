import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import UserService from "../services/user.service";

export default class Candidate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getCandidate().then(
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
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div>
          <Button variant="success">View Assesment</Button>{' '}
          </div>
          <br/>
          <div>
          <Button variant="success">View Interview</Button>{' '}
          </div>
          <br/>
          <div>
          <Button variant="success">Fill Pending BGV</Button>{' '}
          </div>
          <br/>
          <div>
          <Button variant="success">Confirm Joining</Button>{' '}
          </div>
          <br/>
          <div>
          <Button variant="success">Reject Job</Button>{' '}
          </div>
          <br/>
          <div>
          <Button variant="success">Download Offer</Button>{' '}
          </div>
        </header>
      </div>
    );
  }
}