import React, { Component } from "react";
import DashboardService from "../services/dashboard.service";
import Typist from 'react-typist';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    DashboardService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <Typist>
            <span>
              <h1 className="header"><strong>Welcome, to the world of new age jobs!!</strong></h1>

              <p className="lead">This is a place where we redefine staffing and simplify the concept of complete digital hiring process.</p>
            </span>
          </Typist>
          <p>
            <a className="btn btn-primary btn-lg" href="/help" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}