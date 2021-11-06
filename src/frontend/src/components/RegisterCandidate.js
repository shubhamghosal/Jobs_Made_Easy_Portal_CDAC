import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail, isMobilePhone } from "validator";
import { Tab, Tabs } from 'react-bootstrap';
import AuthService from "../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const fullname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The first name must be between 3 and 20 characters.
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const vmobile = value => {
  if (!isMobilePhone(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid mobile number.
      </div>
    );
  }
}

const vmarks = value => {
  if (isNaN(value) || value < 0 || value > 100) {
    return (
      <div className="alert alert-danger" role="alert">
        The percentage value given is invalid.
      </div>
    );
  }
};

export default class RegisterCandidate extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
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
      role: ["candidate"],
      fullname: "",
      username: "",
      email: "",
      password: "",
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
      description: "",
      successful: false,
      message: ""
    };
  }

  onChangeFullName(e) {
    this.setState({
      fullname: e.target.value
    });
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  onChangeMobile(e) {
    this.setState({
      mobile: e.target.value
    });
  }

  onChangeGender(e) {
    this.setState({
      gender: e.target.value
    });
  }

  onSelectLocation(e) {
    this.setState({
      location: e.target.value
    });
  }

  onChangeSkills(e) {
    this.setState({
      skills: e.target.value
    });
  }

  onSelectHqual(e) {
    this.setState({
      hqual: e.target.value
    });
  }

  onChangeMajor(e) {
    this.setState({
      major: e.target.value
    });
  }

  onChangeInstitute(e) {
    this.setState({
      institute: e.target.value
    });
  }

  onSelectYoq(e) {
    this.setState({
      yoq: e.target.value
    });
  }

  onChangeMarks(e) {
    this.setState({
      marks: e.target.value
    });
  }

  onChangeExp(e) {
    this.setState({
      exp: e.target.value
    });
  }

  onSelectYoexp(e) {
    this.setState({
      yoexp: e.target.value
    });
  }

  onChangeCompany(e) {
    this.setState({
      company: e.target.value
    });
  }

  onChangeFoexp(e) {
    this.setState({
      foexp: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.registerCandidate(
        this.state.role,
        this.state.fullname,
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.mobile,
        this.state.gender,
        this.state.location,
        this.state.skills,
        this.state.hqual,
        this.state.major,
        this.state.institute,
        this.state.yoq,
        this.state.marks,
        this.state.exp,
        this.state.yoexp,
        this.state.company,
        this.state.foexp,
        this.state.description
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
      <div className="card">
        <div>
          <img
            src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
            alt="profile-img"
            className="profile-img-card"
          />
          <div className="header-text">
            Candidate Registration
          </div>

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <Tabs defaultActiveKey="basic" id="candidateRegister" className="candidateReg">
                  <Tab eventKey="basic" title="Basic Details" >
                    <div class="form-group">
                      <label htmlFor="fullname">Full Name *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="fullname"
                        value={this.state.fullname}
                        onChange={this.onChangeFullName}
                        validations={[required, fullname]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="username">Username *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="username"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        validations={[required, vusername]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password *</label>
                      <Input
                        type="password"
                        className="form-control"
                        name="password"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        validations={[required, vpassword]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        validations={[required, email]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="mobile">Mobile No *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="mobile"
                        value={this.state.mobile}
                        onChange={this.onChangeMobile}
                        validations={[required, vmobile]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="gender">Gender *</label>
                      <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={this.state.gender === "male"}
                        onChange={this.onChangeGender}
                      />Male
                      <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={this.state.gender === "female"}
                        onChange={this.onChangeGender}
                      />Female
                      <input
                        type="radio"
                        value="others"
                        name="gender"
                        checked={this.state.gender === "others"}
                        onChange={this.onChangeGender}
                      />Others
                    </div>
                    <div class="form-group">
                      <label htmlFor="location">Current Location *</label>
                      <select
                        id="location"
                        className="form-control"
                        value={this.state.location}
                        onChange={this.onSelectLocation}
                        validations={[required]}
                      >
                        <option value="" disabled selected>--Select your current location--</option>
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
                      <label htmlFor="skills">Mention Your Skills (comma seperated) *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="skills"
                        value={this.state.skills}
                        onChange={this.onChangeSkills}
                      />
                    </div>
                  </Tab>
                  <Tab eventKey="education" title="Educational Qualification">
                    <div class="form-group">
                      <label htmlFor="hqual">Highest Qualification *</label>
                      <select
                        id="hqual"
                        className="form-control"
                        value={this.state.hqual}
                        onChange={this.onSelectHqual}
                        validations={[required]}
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
                      <Input
                        type="text"
                        className="form-control"
                        name="major"
                        value={this.state.major}
                        onChange={this.onChangeMajor}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="institute">University/School *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="institute"
                        value={this.state.institute}
                        onChange={this.onChangeInstitute}
                        validations={[required]}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor="yoq">Year Of Qualification *</label>
                      <select
                        id="yoq"
                        className="form-control"
                        value={this.state.yoq}
                        onChange={this.onSelectYoq}
                        validations={[required]}
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
                      <Input
                        type="number"
                        className="form-control"
                        name="marks"
                        value={this.state.marks}
                        onChange={this.onChangeMarks}
                        validations={[required, vmarks]}
                      />
                    </div>
                  </Tab>
                  <Tab eventKey="others" title="Other Details">
                    <div className="form-group">
                      <label htmlFor="exp">Do you have work experience? *</label>
                      <label>
                        <input
                          type="radio"
                          value="yes"
                          name="exp"
                          checked={this.state.exp === "yes"}
                          onChange={this.onChangeExp}
                        />
                        Yes
                      </label>
                      <label>
                        <input
                          type="radio"
                          value="no"
                          name="exp"
                          checked={this.state.exp === "no"}
                          onChange={this.onChangeExp}
                        />
                        No
                      </label>
                    </div>
                    <div class="form-group">
                      <label htmlFor="yoexp">Year Of Experience *</label>
                      <select
                        id="yoexp"
                        className="form-control"
                        value={this.state.yoexp}
                        onChange={this.onSelectYoexp}
                        validations={[required]}
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
                      <Input
                        type="text"
                        className="form-control"
                        name="company"
                        value={this.state.company}
                        onChange={this.onChangeCompany}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="foexp">Field Of Expertize</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="foexp"
                        value={this.state.foexp}
                        onChange={this.onChangeFoexp}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Other Description</label>
                      <Input
                        type="textarea"
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                      />
                    </div>
                    <br />
                    <div class="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </Tab>
                </Tabs>
                <div>
                </div>
              </div>
            )}

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
      </div >
    );
  }
}