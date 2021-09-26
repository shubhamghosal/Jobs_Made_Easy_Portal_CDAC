import React, { Component } from 'react'
import AuthService from "../services/auth.service";
import DashboardService from "../services/dashboard.service";

export default class CandidatesApplied extends Component {
    constructor(props) {
        super(props);
        this.getCandidate = this.getCandidate.bind(this);
        this.selectCandidate = this.selectCandidate.bind(this);
        this.rejectCandidate = this.rejectCandidate.bind(this);
        this.interviewCandidate = this.interviewCandidate.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            currentApplication: [],
            currentCandidate: null,
            currentIndex: -1,
            selectStatus: "SHORTLISTED FOR EXAM",
            interviewStatus: "SHORTLISTED FOR INTERVIEW",
            rejectStatus: "YOU ARE REJECTED",
            message: ""
        };
    }

    componentDidMount() {
        this.getCandidate(this.props.match.params.id);
    }

    getCandidate(id) {
        DashboardService.appliedCandidates(id)
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

    setActiveCandidate(job, index) {
        this.setState({
            currentCandidate: job.candidate,
            currentIndex: index
        });
    }

    selectCandidate() {
        DashboardService.setCandidateStatus(
            this.state.selectStatus,
            this.state.currentCandidate.candid,
            this.props.match.params.id
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The candidate is shortlisted for exam successfully!"
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    message: "Shortlisting Failed!!!"
                });
            });

    }

    interviewCandidate() {
        DashboardService.setCandidateStatus(
            this.state.interviewStatus,
            this.state.currentCandidate.candid,
            this.props.match.params.id
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The candidate is shortlisted for interview successfully!"
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    message: "Shortlisting Failed!!!"
                });
            });

    }

    rejectCandidate() {
        DashboardService.setCandidateStatus(
            this.state.rejectStatus,
            this.state.currentCandidate.candid,
            this.props.match.params.id
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The candidate is rejected successfully!"
                });
            })
            .catch(e => {
                console.log(e);
                this.setState({
                    message: "Rejection Failed!!!"
                });
            });

    }

    render() {
        const { currentApplication, currentIndex, currentCandidate } = this.state;

        return (
            <div>
                <div className="header-main">
                    Candidate List
                </div>
                <div className="card">
                    <div>
                        <ul className="list-group">
                            {currentApplication &&
                                currentApplication.map((job, index) => (
                                    <li
                                        className={
                                            "list-group-item " +
                                            (index === currentIndex ? "active" : "")
                                        }
                                        onClick={() => this.setActiveCandidate(job, index)}
                                        key={index}
                                    >
                                        {job.candidate.fullname}
                                    </li>
                                ))}
                        </ul>
                    </div>
                    <br />
                    <div>
                        {currentCandidate ? (
                            <div>
                                <h3><u>Candidate Details</u></h3>
                                <div>
                                    <label>
                                        <strong>Full Name:</strong>
                                    </label>
                                    {currentCandidate.fullname}
                                </div>
                                <div>
                                    <label>
                                        <strong>Mobile:</strong>
                                    </label>
                                    {currentCandidate.mobile}
                                </div>
                                <div>
                                    <label>
                                        <strong>Gender:</strong>
                                    </label>
                                    {currentCandidate.gender}
                                </div>
                                <div>
                                    <label>
                                        <strong>Current Location:</strong>
                                    </label>
                                    {currentCandidate.location}
                                </div>
                                <div>
                                    <label>
                                        <strong>Skills:</strong>
                                    </label>
                                    {currentCandidate.skills}
                                </div>
                                <div>
                                    <label>
                                        <strong>Highest Qualification:</strong>
                                    </label>
                                    {currentCandidate.hqual}
                                </div>
                                <div>
                                    <label>
                                        <strong>Specialization:</strong>
                                    </label>
                                    {currentCandidate.major}
                                </div>
                                <div>
                                    <label>
                                        <strong>Institute Studied:</strong>
                                    </label>
                                    {currentCandidate.institute}
                                </div>
                                <div>
                                    <label>
                                        <strong>Year Of Qualification:</strong>
                                    </label>
                                    {currentCandidate.yoq}
                                </div>
                                <div>
                                    <label>
                                        <strong>Marks Obtained:</strong>
                                    </label>
                                    {currentCandidate.marks}
                                </div>
                                <div>
                                    <label>
                                        <strong>Does Candidate Have Work Experience?:</strong>
                                    </label>
                                    {currentCandidate.exp}
                                </div>
                                <div>
                                    <label>
                                        <strong>Years of Experience(if yes):</strong>
                                    </label>
                                    {currentCandidate.yoexp}
                                </div>
                                <div>
                                    <label>
                                        <strong>Company Worked:</strong>
                                    </label>
                                    {currentCandidate.company}
                                </div>
                                <div>
                                    <label>
                                        <strong>Field Of Experience:</strong>
                                    </label>
                                    {currentCandidate.foexp}
                                </div>
                                <div>
                                    <label>
                                        <strong>Other Interest / Descriptions:</strong>
                                    </label>
                                    {currentCandidate.description}
                                </div>
                                <br />
                                <div className="form-group">
                                    <div className="micro-card">
                                        <div className="status-update">Update Status:</div>
                                        <button type="button" className="btn btn-success" onClick={this.selectCandidate}>Shortlist For Exam</button>{' '}
                                        <button type="button" className="btn btn-success" onClick={this.interviewCandidate}>Shortlist For Interview</button>{' '}
                                        <button type="button" className="btn btn-danger" onClick={this.rejectCandidate}>Reject Candidate</button>{' '}
                                    </div>
                                    <br/>
                                </div>
                                <br />
                                {this.state.message}
                            </div>
                        ) : (
                            <div>
                                <br />
                                <b>Click on a Candidate to see details and update status</b>
                            </div>
                        )}
                    </div>
                </div>

            </div>
        )
    }
}
