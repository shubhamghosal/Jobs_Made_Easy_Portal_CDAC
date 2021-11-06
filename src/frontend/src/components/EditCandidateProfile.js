import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";
import { Button } from 'react-bootstrap';

export default class EditCandidateProfile extends Component {
    constructor(props) {
        super(props);
        this.getCandidate = this.getCandidate.bind(this);
        this.updateCandidate = this.updateCandidate.bind(this);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onSelectLocation = this.onSelectLocation.bind(this);
        this.onChangeSkills = this.onChangeSkills.bind(this);
        this.onSelectHqual = this.onSelectHqual.bind(this);
        this.onChangeMajor = this.onChangeMajor.bind(this);
        this.onChangeInstitute = this.onChangeInstitute.bind(this);
        this.onSelectYoq = this.onSelectYoq.bind(this);
        this.onChangeMarks = this.onChangeMarks.bind(this);
        this.onChangeExp = this.onChangeExp.bind(this);
        this.onSelectYoexp = this.onSelectYoexp.bind(this);
        this.onChangeCompany = this.onChangeCompany.bind(this);
        this.onChangeFoexp = this.onChangeFoexp.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            currentCandidate: {
                candid: null,
                fullname: "",
                mobile: "",
                gender: "",
                location: "",
                skills: "",
                hqual: "",
                major: "",
                institute: "",
                yoq: "",
                marks: "",
                exp: "",
                yoexp: "",
                company: "",
                foexp: "",
                description: ""
            },
            message: ""
        };
    }


    componentDidMount() {
        this.getCandidate(this.props.match.params.id);
    }

    getCandidate(id) {
        UserService.editCandidate(id)
            .then(response => {
                this.setState({
                    currentCandidate: response.data
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }

    updateCandidate() {
        UserService.updateCandidate(
            this.state.currentCandidate.candid,
            this.state.currentCandidate
        )
            .then(response => {
                console.log(response.data);
                this.setState({
                    message: "The candidate was updated successfully!"
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
                currentCandidate: {
                    ...prevState.currentCandidate,
                    fullname: fullname
                }
            };
        });
    }

    onChangeMobile(e) {
        const mobile = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                mobile: mobile
            }
        }));
    }

    onChangeGender(e) {
        const gender = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                gender: gender
            }
        }));
    }


    onSelectLocation(e) {
        const location = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                location: location
            }
        }));
    }

    onChangeSkills(e) {
        const skills = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                skills: skills
            }
        }));
    }

    onSelectHqual(e) {
        const hqual = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                hqual: hqual
            }
        }));
    }

    onChangeMajor(e) {
        const major = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                major: major
            }
        }));
    }

    onChangeInstitute(e) {
        const institute = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                institute: institute
            }
        }));
    }

    onSelectYoq(e) {
        const yoq = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                yoq: yoq
            }
        }));
    }

    onChangeMarks(e) {
        const marks = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                marks: marks
            }
        }));
    }

    onChangeExp(e) {
        const exp = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                exp: exp
            }
        }));
    }

    onSelectYoexp(e) {
        const yoexp = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                yoexp: yoexp
            }
        }));
    }

    onChangeCompany(e) {
        const company = e.target.value;

        this.setState(prevState => ({
            currentRecruiter: {
                ...prevState.currentRecruiter,
                company: company
            }
        }));
    }

    onChangeFoexp(e) {
        const foexp = e.target.value;

        this.setState(prevState => ({
            currentCandidate: {
                ...prevState.currentCandidate,
                foexp: foexp
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
        const { currentCandidate } = this.state;

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
                            {currentCandidate.candid}
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
                                value={currentCandidate.fullname}
                                onChange={this.onChangeFullName}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mobile">Mobile Number</label>
                            <input
                                type="text"
                                className="form-control"
                                id="mobile"
                                value={currentCandidate.mobile}
                                onChange={this.onChangeMobile}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="gender">Gender</label>
                            <input
                                type="text"
                                className="form-control"
                                id="gender"
                                value={currentCandidate.gender}
                                onChange={this.onChangeGender}
                            />
                        </div>

                        <div class="form-group">
                            <label htmlFor="location">Current Location *</label>
                            <select
                                id="location"
                                className="form-control"
                                value={currentCandidate.location}
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
                                value={currentCandidate.skills}
                                onChange={this.onChangeSkills}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="hqual">Highest Qualification *</label>
                            <select
                                id="hqual"
                                className="form-control"
                                value={currentCandidate.hqual}
                                onChange={this.onSelectHqual}
                            >
                                <option value="" disabled selected>--Select your qualification--</option>
                                <option value="10th">10th</option>
                                <option value="12th">12th</option>
                                <option value="B.Tech">B.Tech</option>
                                <option value="B.Sc">B.Sc</option>
                                <option value="B.Com">B.Com</option>
                                <option value="BA">BA</option>
                                <option value="M.Tech">M.Tech</option>
                                <option value="M.Sc">M.Sc</option>
                                <option value="M.Com">M.Com</option>
                                <option value="MBA">MBA</option>
                                <option value="PHD">PHD</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="major">Specialization/Major </label>
                            <input
                                type="text"
                                className="form-control"
                                name="major"
                                value={currentCandidate.major}
                                onChange={this.onChangeMajor}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="institute">University/School *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="institute"
                                value={currentCandidate.institute}
                                onChange={this.onChangeInstitute}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="yoq">Year Of Qualification *</label>
                            <select
                                id="yoq"
                                className="form-control"
                                value={currentCandidate.yoq}
                                onChange={this.onSelectYoq}
                            >
                                <option value="" disabled selected>--Select your year of passing--</option>
                                <option value="2010">2010</option>
                                <option value="2011">2011</option>
                                <option value="2012">2012</option>
                                <option value="2013">2013</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="marks">Percentage Of Marks *</label>
                            <input
                                type="number"
                                className="form-control"
                                name="marks"
                                value={currentCandidate.marks}
                                onChange={this.onChangeMarks}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exp">Do you have work experience? *</label>
                            <input
                                type="text"
                                className="form-control"
                                name="exp"
                                value={currentCandidate.exp}
                                onChange={this.onChangeExp}
                            />
                        </div>
                        <div class="form-group">
                            <label htmlFor="yoexp">Year Of Experience *</label>
                            <select
                                id="yoexp"
                                className="form-control"
                                value={currentCandidate.yoexp}
                                onChange={this.onSelectYoexp}
                            >
                                <option value="" disabled selected>--Select your years of experience--</option>
                                <option value="Fresher">Fresher</option>
                                <option value="0">0 Years</option>
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
                        <div className="form-group">
                            <label htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="company"
                                value={currentCandidate.company}
                                onChange={this.onChangeCompany}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="foexp">Field Of Expertize</label>
                            <input
                                type="text"
                                className="form-control"
                                name="foexp"
                                value={currentCandidate.foexp}
                                onChange={this.onChangeFoexp}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="description">Other Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="description"
                                value={currentCandidate.description}
                                onChange={this.onChangeDescription}
                            />
                        </div>
                        <br />
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-success"
                                onClick={this.updateCandidate}
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