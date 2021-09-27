import React, { Component } from 'react'
import CheckButton from "react-validation/build/button";
import Form from "react-validation/build/form";
import DashboardService from "../services/dashboard.service";
import Input from "react-validation/build/input";
import Text from "react-validation/build/textarea";
import AuthService from "../services/auth.service";
import { Button } from 'react-bootstrap';

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const minlength = value => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Length must be between 3 and 20 characters.
            </div>
        );
    }
};

const maxlength = value => {
    if (value.length < 3) {
        return (
            <div className="alert alert-danger" role="alert">
                Length must be greater than 3 characters.
            </div>
        );
    }
    else if (value.length > 1000) {
        return (
            <div className="alert alert-danger" role="alert">
                Length must be less than 1000 characters.
            </div>
        );
    }
};

export default class JobPost extends Component {
    constructor(props) {
        super(props);
        this.createJob = this.createJob.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobVacancy = this.onChangeJobVacancy.bind(this);
        this.onSelectReqExp = this.onSelectReqExp.bind(this);
        this.onChangeJobTitle = this.onChangeJobTitle.bind(this);
        this.onChangeJobType = this.onChangeJobType.bind(this);
        this.onSelectJobLocation = this.onSelectJobLocation.bind(this);
        this.onChangeJobSalary = this.onChangeJobSalary.bind(this);
        this.onChangeJobDescription = this.onChangeJobDescription.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            jobTitle: "",
            jobVacancy: "",
            reqExp: "",
            jobType: "",
            jobLocation: "",
            jobSalary: "",
            jobDescription: "",
            successful: false,
            message: ""
        };
    }

    onChangeJobTitle(e) {
        this.setState({
            jobTitle: e.target.value
        });
    }

    onChangeJobVacancy(e) {
        this.setState({
            jobVacancy: e.target.value
        });
    }

    onSelectReqExp(e) {
        this.setState({
            reqExp: e.target.value
        });
    }

    onChangeJobType(e) {
        this.setState({
            jobType: e.target.value
        });
    }

    onSelectJobLocation(e) {
        this.setState({
            jobLocation: e.target.value
        });
    }

    onChangeJobSalary(e) {
        this.setState({
            jobSalary: e.target.value
        });
    }

    onChangeJobDescription(e) {
        this.setState({
            jobDescription: e.target.value
        });
    }

    createJob(e) {
        e.preventDefault();

        this.setState({
            message: "",
            successful: false
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            DashboardService.createJobPost(
                this.state.currentUser.id,
                this.state.jobTitle,
                this.state.jobVacancy,
                this.state.reqExp,
                this.state.jobType,
                this.state.jobLocation,
                this.state.jobSalary,
                this.state.jobDescription,
            ).then(
                response => {
                    this.setState({
                        message: response.data.message,
                        successful: true
                    });
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        successful: false,
                        message: resMessage
                    });
                }
            );
        }

    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="header-text">
                        <p>Create A New Job</p>
                    </div>
                    <Form
                        onSubmit={this.createJob}
                        ref={c => {
                            this.form = c;
                        }}

                    >
                        {!this.state.successful && (
                            <div>
                                <div className="form-group">
                                    <label htmlFor="jobTitle">Job Title*</label>
                                    <Input
                                        type="text"
                                        className="form-control"
                                        id="jobTitle"
                                        value={this.state.jobTitle}
                                        onChange={this.onChangeJobTitle}
                                        validations={[required, minlength]}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobVacancy">Approximate Vacancies</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        id="jobVacancy"
                                        value={this.state.jobVacancy}
                                        onChange={this.onChangeJobVacancy}
                                    />
                                </div>
                                <div class="form-group">
                                    <label htmlFor="reqExp">Experience Required </label>
                                    <select
                                        id="reqExp"
                                        className="form-control"
                                        value={this.state.reqExp}
                                        onChange={this.onSelectReqExp}
                                    >
                                        <option value="" disabled selected>--Select Years Of Experience Required--</option>
                                        <option value="0">0 Year</option>
                                        <option value="1">1 Year</option>
                                        <option value="2">2 Years</option>
                                        <option value="3">3 Years</option>
                                        <option value="4">4 Years</option>
                                        <option value="5">5 Years</option>
                                        <option value="6">6 Years</option>
                                        <option value="7">7 Years</option>
                                        <option value="8">8 Years</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobType">Job Type*</label>
                                    <input
                                        type="radio"
                                        value="Full-Time"
                                        name="jobType"
                                        checked={this.state.jobType === "Full-Time"}
                                        onChange={this.onChangeJobType}
                                    />Full-Time
                                    <input
                                        type="radio"
                                        value="Part-Time"
                                        name="jobType"
                                        checked={this.state.jobType === "Part-Time"}
                                        onChange={this.onChangeJobType}
                                    />Part-Time
                                    <input
                                        type="radio"
                                        value="Internship"
                                        name="jobType"
                                        checked={this.state.jobType === "Internship"}
                                        onChange={this.onChangeJobType}
                                    />Internship
                                    <input
                                        type="radio"
                                        value="Work From Home"
                                        name="jobType"
                                        checked={this.state.jobType === "Work From Home"}
                                        onChange={this.onChangeJobType}
                                    />Work From Home
                                </div>
                                <div class="form-group">
                                    <label htmlFor="jobLocation">Job Location</label>
                                    <select
                                        id="jobLocation"
                                        className="form-control"
                                        value={this.state.jobLocation}
                                        onChange={this.onSelectJobLocation}
                                    >
                                        <option value="" disabled selected>--Select The Job Location--</option>
                                        <option value="Africa">Africa</option>
                                        <option value="Australia">Algeria</option>
                                        <option value="Brazil">Brazil</option>
                                        <option value="Chile">Chile</option>
                                        <option value="Denmark">Denmark</option>
                                        <option value="France">France</option>
                                        <option value="Germany">Germany</option>
                                        <option value="India">India</option>
                                        <option value="Poland">Poland</option>
                                        <option value="UAE">UAE</option>
                                        <option value="USA">USA</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="jobSalary">Expected Salary Package (in CTC)</label>
                                    <Input
                                        type="number"
                                        className="form-control"
                                        id="jobSalary"
                                        value={this.state.jobSalary}
                                        onChange={this.onChangeJobSalary}
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="jobDescription">Job Description* </label>
                                    <Text
                                        className="form-control"
                                        id="jobDescription"
                                        value={this.state.jobDescription}
                                        onChange={this.onChangeJobDescription}
                                        validations={[required, maxlength]}
                                    />
                                </div>
                                <br />
                                <div className="form-group">
                                    <button className="btn btn-primary btn-block">Create Job Post</button>
                                    <Button variant="danger" href="/recruiter">Return To Dashboard</Button>
                                </div>

                            </div>)}

                        {this.state.message && (
                            <div className="form-group">
                                <div
                                    className={
                                        this.state.successful
                                            ? "alert alert-success"
                                            : "alert alert-danger"
                                    }
                                    role="alert"
                                >
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                        <CheckButton
                            style={{ display: "none" }}
                            ref={c => {
                                this.checkBtn = c;
                            }}
                        />
                    </Form>
                </div>
            </div>
        )
    }
}
