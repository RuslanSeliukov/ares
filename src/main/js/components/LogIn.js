import React from 'react';
import axios from 'axios';
import LogInForm from "./forms/LogInForm";
import { addUserInfo } from "../redux/actions/action";
import store from "../redux/store/store"

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: undefined
        };
    }

    submit = values => {
        this.setState({username: values.username});
        axios({
            method: 'post',
            url: '/api/authenticate',
            data: values
        }).then(function (response) {
            localStorage.setItem("token", response.data.jwt);
            store.dispatch(addUserInfo(this.state.username));
            this.props.history.push("/");
        }.bind(this));
    };

    render() {
        return (
            <div>
                <h3>Please Enter Your Username And Password</h3>
                <LogInForm onSubmit={this.submit} />
            </div>
        )
    }
}

export default LogIn;