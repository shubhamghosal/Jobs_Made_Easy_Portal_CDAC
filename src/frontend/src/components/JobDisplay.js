import React, { Component } from 'react'
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service";
import { Button } from 'react-bootstrap';

export default class JobDisplay extends Component {
    constructor(props) {
        super(props);
        this.retrieveJobs = this.retrieveJobs.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.setActiveJob = this.setActiveJob.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.applyJob = this.applyJob.bind(this);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.state = {
            currentUser: AuthService.getCurrentUser(),
            jobs: [],
            currentJob: null,
            currentIndex: -1,
            searchTitle: "",
            message: "",
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

    applyJob() {
        DashboardService.applyJob(
            this.state.currentUser.id,
            this.state.currentJob.jobid
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The job was applied successfully!",
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    message: "Application Failed"
                });
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
                        <h3><strong><u>Jobs Available</u></strong></h3>

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
                                        {job.jobTitle} (Vacancy: {job.jobVacancy})
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
                                        <strong>Approximate Salary (in CTC):</strong>
                                    </label>
                                    {currentJob.jobSalary}
                                </div>
                                <div>
                                    <label>
                                        <strong>Job Description:</strong>
                                    </label>
                                    {currentJob.jobDescription}
                                </div>
                                <br />
                                <div>
                                    <button className="btn btn-success" type="button" onClick={this.applyJob}>Apply</button>
                                    <Button variant="danger" href="/candidate">Return To Dashboard</Button>
                                </div>
                                <br/>
                                <div className="form-group">
                                    <b>{this.state.message}</b>
                                </div>
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
