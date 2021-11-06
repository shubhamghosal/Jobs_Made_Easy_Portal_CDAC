import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service";

export default class RecruiterDashboard extends Component {
  constructor(props) {
    super(props);
    this.viewJobs = this.viewJobs.bind(this);
    this.setActiveJob = this.setActiveJob.bind(this);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
      jobs: [],
      currentJob: null,
      currentIndex: -1,
    };
  }

  componentDidMount() {
    this.viewJobs(this.state.currentUser.id);
  }

  viewJobs(id) {
    DashboardService.viewJobApplication(id)
      .then(response => {
        this.setState({
          jobs: response.data
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  setActiveJob(job, index) {
    this.setState({
      currentJob: job,
      currentIndex: index
    });
  }


  render() {
    const { jobs, currentIndex, currentJob } = this.state;
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
            <div>
              <ul className="list-group">
                {jobs &&
                  jobs.map((job, index) => (
                    <li
                      className={
                        "list-group-item " +
                        (index === currentIndex ? "active" : "")
                      }
                      onClick={() => this.setActiveJob(job, index)}
                      key={index}
                    >
                      {job.jobTitle}
                    </li>
                  ))}
              </ul>
            </div>
            <br />
            <div>
              {currentJob ? (
                <div>
                  <Button variant="success" href={`applied/status/${currentJob.jobid}`}>View Candidates Applied</Button>{' '}
                </div>
              ) : (
                <div>
                  <br />
                  <b>Click on the created Job to track status</b>
                </div>
              )}
            </div>
          </div>
          <br />
        </div>
      </div>
    );
  }
}