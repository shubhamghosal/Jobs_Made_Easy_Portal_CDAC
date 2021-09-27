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

export default class RegisterRecruiter extends Component {
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
    this.onChangeCompName = this.onChangeCompName.bind(this);
    this.onChangeCompDesignation = this.onChangeCompDesignation.bind(this);
    this.onSelectYoexp = this.onSelectYoexp.bind(this);
    this.onSelectOffLocation = this.onSelectOffLocation.bind(this);
    this.onChangeCompIndustry = this.onChangeCompIndustry.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.state = {
      role: ["recruiter"],
      fullname: "",
      username: "",
      email: "",
      password: "",
      mobile: "",
      gender: "",
      location: "",
      skills: "",
      compName: "",
      compDesignation: "",
      yoexp: "",
      offLocation: "",
      compIndustry: "",
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

  onChangeCompName(e) {
    this.setState({
      compName: e.target.value
    });
  }

  onChangeCompDesignation(e) {
    this.setState({
      compDesignation: e.target.value
    });
  }

  onSelectYoexp(e) {
    this.setState({
      yoexp: e.target.value
    });
  }

  onSelectOffLocation(e) {
    this.setState({
      offLocation: e.target.value
    });
  }

  onChangeCompIndustry(e) {
    this.setState({
      compIndustry: e.target.value
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
      successful: false
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.registerRecruiter(
        this.state.role,
        this.state.fullname,
        this.state.username,
        this.state.email,
        this.state.password,
        this.state.mobile,
        this.state.gender,
        this.state.location,
        this.state.skills,
        this.state.compName,
        this.state.compDesignation,
        this.state.yoexp,
        this.state.offLocation,
        this.state.compIndustry,
        this.state.description
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        e => {
          const resMessage =
            (e.response && e.response.data && e.response.data.message) || e.message || e.toString();

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
            Recruiter Registration
          </div>
          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <Tabs defaultActiveKey="basic" id="recruiterRegister" className="recruiterReg">
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
                      <label htmlFor="email">Office Email *</label>
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
                      <label htmlFor="skills">Mention Major Skills Required (comma seperated) *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="skills"
                        value={this.state.skills}
                        onChange={this.onChangeSkills}
                      />
                    </div>
                  </Tab>
                  <Tab eventKey="professional" title="Professional Details" >
                    <div className="form-group">
                      <label htmlFor="compName">Current Company Name *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="compName"
                        value={this.state.compName}
                        onChange={this.onChangeCompName}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="compDesignation">Current Designation *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="compDesignation"
                        value={this.state.compDesignation}
                        onChange={this.onChangeCompDesignation}
                        validations={[required]}
                      />
                    </div>

                    <div class="form-group">
                      <label htmlFor="yoexp">Total Experience *</label>
                      <select
                        id="yoexp"
                        className="form-control"
                        value={this.state.yoexp}
                        onChange={this.onSelectYoexp}
                        validations={[required]}
                      >
                        <option value="" disabled selected>--Select your total experience--</option>
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
                        value={this.state.offLocation}
                        onChange={this.onSelectOffLocation}
                        validations={[required]}
                      >
                        <option value="" disabled selected>--Select your office location--</option>
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
                      <label htmlFor="compIndustry">Type Of Industry *</label>
                      <Input
                        type="text"
                        className="form-control"
                        name="compIndustry"
                        value={this.state.compIndustry}
                        onChange={this.onChangeCompIndustry}
                        validations={[required]}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="description">Other Details(if any)</label>
                      <Input
                        type="textarea"
                        className="form-control"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChangeDescription}
                      />
                    </div>
                    <br />
                    <div className="form-group">
                      <button className="btn btn-primary btn-block">Sign Up</button>
                    </div>
                  </Tab>
                </Tabs>
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
      </div>
    );
  }
}