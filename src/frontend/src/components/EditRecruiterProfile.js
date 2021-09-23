import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Button } from 'react-bootstrap';

export default class EditRecruiterProfile extends Component {
    constructor(props) {
        super(props);
        this.getRecruiter = this.getRecruiter.bind(this);
        this.updateRecruiter = this.updateRecruiter.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSelectLocation = this.onSelectLocation.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onChangeCompName = this.onChangeCompName.bind(this);
        this.onChangeCompDesignation = this.onChangeCompDesignation.bind(this);
        this.onSelectYoexp = this.onSelectYoexp.bind(this);
        this.onSelectOffLocation = this.onSelectOffLocation.bind(this);
        this.onChangeCompIndustry = this.onChangeCompIndustry.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            currentRecruiter: {
                recrid: null,
                fullname: "",
                mobile: "",
                gender: "",
                location: "",
                skills: "",
                compName: "",
                compDesignation: "",
                yoexp: "",
                offLocation: "",
                compIndustry: "",
                description: ""
            },
            message: ""
        };
    }


    componentDidMount() {
        this.getRecruiter(this.props.match.params.id);
    }

    getRecruiter(id) {
        UserService.editRecruiter(id)
            .then(response => {
                this.setState({
                    currentRecruiter: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateRecruiter() {
        UserService.updateRecruiter(
            this.state.currentRecruiter.recrid,
            this.state.currentRecruiter
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The recruiter was updated successfully!"
                });
            })
            .catch(e => {
                console.log(e);
            });
    }

    onChangeFullName(e) {
        const fullname = e.target.value;

        this.setState(function (prevState) {
            return {
                currentRecruiter: {
                    ...prevState.currentRecruiter,
                    fullname: fullname
                }
            };
        });
    }

    onChangeMobile(e) {
        const mobile = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                mobile: mobile
            }
        }));
    }

    onChangeGender(e) {
        const gender = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                gender: gender
            }
        }));
    }


    onSelectLocation(e) {
        const location = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                location: location
            }
        }));
    }

    onChangeSkills(e) {
        const skills = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                skills: skills
            }
        }));
    }

    onChangeCompName(e) {
        const compName = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                compName: compName
            }
        }));
    }

    onChangeCompDesignation(e) {
        const compDesignation = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                compDesignation: compDesignation
            }
        }));
    }

    onSelectYoexp(e) {
        const yoexp = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                yoexp: yoexp
            }
        }));
    }

    onSelectOffLocation(e) {
        const offLocation = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                offLocation: offLocation
            }
        }));
    }

    onChangeCompIndustry(e) {
        const compIndustry = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                compIndustry: compIndustry
            }
        }));
    }

    onChangeDescription(e) {
        const description = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                description: description
            }
        }));
    }

    render() {
        const { currentUser } = this.state;
        const { currentRecruiter } = this.state;

        return (
            <div className="edit-form">
                <div className="header-main">
                    <p>UPDATE PROFILE</p>
                </div>
                <div className="card">
                    <form>
                        <p className="form-group">
                            <strong>User Name:</strong>{" "}
                            {currentUser.username}
                        </p>
                        <p className="form-group">
                            <strong>Application No:</strong>{" "}
                            {currentUser.id}
                        </p>
                        <p className="form-group">
                            <strong>Email:</strong>{" "}
                            {currentUser.email}
                        </p>
                        <p className="form-group">
                            <strong>Authorities:</strong>
                            {currentUser.roles &&
                                currentUser.roles.map((role, index) => <span key={index}>{role}</span>)}
                        </p>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="fullname"
                                value={currentRecruiter.fullname}
                                onChange={this.onChangeFullName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                value={currentRecruiter.mobile}
                                onChange={this.onChangeMobile}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <input
                                type="text"
                                className="form-control"
                                id="gender"
                                value={currentRecruiter.gender}
                                onChange={this.onChangeGender}
                            />
                        </div>

                        <div class="form-group">
                            <label htmlFor="location">Current Location *</label>
                            <select
                                id="location"
                                className="form-control"
                                value={currentRecruiter.location}
                                onChange={this.onSelectLocation}
                            >
                                <option value="" disabled selected>-- Update Your New Location --</option>
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
                            <label htmlFor="skills">Skills Required</label>
                            <input
                                type="text"
                                className="form-control"
                                id="skills"
                                value={currentRecruiter.skills}
                                onChange={this.onChangeSkills}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="compName">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="compName"
                                value={currentRecruiter.compName}
                                onChange={this.onChangeCompName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="compDesignation">Your Designation</label>
                            <input
                                type="text"
                                className="form-control"
                                id="compDesignation"
                                value={currentRecruiter.compDesignation}
                                onChange={this.onChangeCompDesignation}
                            />
                        </div>

                        <div class="form-group">
                            <label htmlFor="yoexp">Total Experience *</label>
                            <select
                                id="yoexp"
                                className="form-control"
                                value={currentRecruiter.yoexp}
                                onChange={this.onSelectYoexp}
                            >
                                <option value="" disabled selected>--Update your total experience--</option>
                                <option value="0.5">0.5 Years</option>
                                <option value="1">1 Years</option>
                                <option value="2">2 Years</option>
                                <option value="3">3 Years</option>
                                <option value="4">4 Years</option>
                                <option value="5">5 Years</option>
                                <option value="6">6 Years</option>
                                <option value="7">7 Years</option>
                                <option value="8">8 Years</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label htmlFor="offLocation">Office Location *</label>
                            <select
                                id="offLocation"
                                className="form-control"
                                value={currentRecruiter.offLocation}
                                onChange={this.onSelectOffLocation}
                            >
                                <option value="" disabled selected>--Update your office location--</option>
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
                            <label htmlFor="compIndustry">Work Related Industry</label>
                            <input
                                type="text"
                                className="form-control"
                                id="compIndustry"
                                value={currentRecruiter.compIndustry}
                                onChange={this.onChangeCompIndustry}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Other Things</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={currentRecruiter.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={this.updateRecruiter}
                            >
                                Update and Submit
                            </button>
                            <Button variant="danger" href={`/profile/${currentUser.id}`} id="return-profile">Return To Profile</Button>
                        </div>
                        <p>{this.state.message}</p>
                    </form>
                </div>
            </div>
        );
    }
}