import React, { Component } from 'react'
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service";

export default class CheckStatus extends Component {
    constructor(props) {
        super(props);
        this.checkStatus = this.checkStatus.bind(this);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            currentJob: {
                status: ""
            }
        };
    }


    componentDidMount() {
        this.checkStatus(this.state.currentUser.id, this.props.match.params.id);
    }

    checkStatus(id, jobid) {
        DashboardService.viewStatus(id, jobid)
            .then(response => {
                this.setState({
                    status: response.data.status
                });
                console.log(response.data);
            })
            .catch(e => {
                console.log(e);
            });
    }


    render() {
        const { status } = this.state;
        return (
            <div>
                <div className="header-main">
                    Current Application Status
                </div>
                <div className="card">
                    <div className="mini-card">
                        <h3><u>Current Status:</u></h3> {' '}
                        <div>{status}</div>
                    </div>
                </div>
            </div>
        )
    }
}
