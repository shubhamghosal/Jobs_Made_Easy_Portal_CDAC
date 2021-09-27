import React, { Component } from 'react'
import DashboardService from "../services/dashboard.service";
import AuthService from "../services/auth.service";
import { Button } from 'react-bootstrap';

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
                        <h2><u>Current Status:</u></h2> {' '}
                        <div><b>*{status}*</b></div>
                        <br/>
                        <Button variant="danger" href="/candidate">Return To Dashboard</Button>
                    </div>
                </div>
            </div>
        )
    }
}
