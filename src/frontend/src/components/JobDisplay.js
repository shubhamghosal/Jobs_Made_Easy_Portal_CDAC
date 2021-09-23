import React, { Component } from 'react'
import DashboardService from "../services/dashboard.service";
import { Link } from "react-router-dom";

export default class JobDisplay extends Component {
    constructor(props) {
        super(props);
        this.retrieveJobs = this.retrieveJobs.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.setActiveJob = this.setActiveJob.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.state = {
            jobs: [],
            currentJob: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }
    componentDidMount() {
        this.retrieveJobs();
    }

    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;

        this.setState({
            searchTitle: searchTitle
        });
    }

    retrieveJobs() {
        DashboardService.getJobPost()
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

    refreshList() {
        this.retrieveJobs();
        this.setState({
            currentJob: null,
            currentIndex: -1
        });
    }

    setActiveJob(job, index) {
        this.setState({
            currentJob: job,
            currentIndex: index
        });
    }
    searchTitle() {
        DashboardService.findByTitle(this.state.searchTitle)
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

    render() {
        const { searchTitle, jobs, currentJob, currentIndex } = this.state;
        return (
            <div >
                <div className="header-main">
                    <p>Job Search</p>
                </div>
                <div className="card">
                    <div className="mini-card">
                        <div>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search by Job Title"
                                value={searchTitle}
                                onChange={this.onChangeSearchTitle}
                            />
                            <div>
                                <br />
                                <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={this.searchTitle}
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div>
                        <h2><u>Job List</u></h2>

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
                                <h3><u>Job Details</u></h3>
                                <div>
                                    <label>
                                        <strong>Title:</strong>
                                    </label>
                                    {currentJob.jobTitle}
                                </div>
                                <div>
                                    <label>
                                        <strong>Approximate Vacancies:</strong>
                                    </label>
                                    {currentJob.jobVacancy}
                                </div>
                                <div>
                                    <label>
                                        <strong>Job Type:</strong>
                                    </label>
                                    {currentJob.jobType}
                                </div>
                                <div>
                                    <label>
                                        <strong>Years of experience required:</strong>
                                    </label>
                                    {currentJob.reqExp}
                                </div>
                                <div>
                                    <label>
                                        <strong>Job Location:</strong>
                                    </label>
                                    {currentJob.jobLocation}
                                </div>
                                <div>
                                    <label>
                                        <strong>Approximate Salary:</strong>
                                    </label>
                                    {currentJob.jobSalary}
                                </div>
                                <div>
                                    <label>
                                        <strong>Job Description:</strong>
                                    </label>
                                    {currentJob.jobDescription}
                                </div>
                                <Link
                                    to={"/get/job" + currentJob.jobid}
                                    className="badge badge-warning"
                                >
                                    Edit
                                </Link>
                            </div>
                        ) : (
                            <div>
                                <br />
                                <b>Click on a Job or Search to see details</b>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )
    }
}
