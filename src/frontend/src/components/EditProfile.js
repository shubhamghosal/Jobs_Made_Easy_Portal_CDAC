import React, { Component } from "react";
import AuthService from "../services/auth.service";
import UserService from "../services/user.service";

export default class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.onChangeFullName = this.onChangeFullName.bind(this);
        this.onChangeMobile = this.onChangeMobile.bind(this);
        this.getRecruiter = this.getRecruiter.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            currentRecruiter: {
                id: null,
                fullname: "",
                mobile: ""
            },
            message: ""
        };
    }

    componentDidMount() {
        this.getRecruiter(this.props.match.params.id);
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

    getRecruiter(id) {
        UserService.viewRecruiter(id)
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


    render() {
        const { currentUser } = this.state;
        const { currentRecruiter } = this.state;

        return (
            <div className="card">
                <header className="jumbotron">
                    <h3>
                        <strong>{currentUser.username}</strong> Profile
                    </h3>
                </header>
                <p>
                    <strong>Application No:</strong>{" "}
                    {currentUser.id}
                </p>
                <p>
                    <strong>Email:</strong>{" "}
                    {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <p>
                    {currentUser.roles &&
                        currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </p>
                <div>
                    {currentRecruiter ? (
                        <div className="edit-form">
                            <form>
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
                            </form>
                            <p>{this.state.message}</p>
                        </div>
                    ) : (
                        <div>
                            <br />
                            <p>Please click on a Recruiter...</p>
                        </div>
                    )}
                </div>

            </div>
        );
    }
}