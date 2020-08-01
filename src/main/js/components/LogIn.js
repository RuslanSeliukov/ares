import React from 'react';
import axios from 'axios';
import LogInForm from "./forms/LogInForm";
import {updateUserInfo} from "../redux/actions/action";
import store from "../redux/store/store"

class LogIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            error: undefined
        };
    }

    submit = values => {
        this.setState({
            username: values.username,
            error: undefined
        });
        axios({
            method: 'post',
            url: '/api/authenticate',
            data: values
        }).then(function (response) {
            localStorage.setItem("token", response.data.jwt);
            store.dispatch(updateUserInfo({
                username: this.state.username,
                isValid: true
            }));
            this.props.history.push("/");
        }.bind(this)).catch(e => {
            this.setState({error: true})
        });
    };

    render() {
        let error = this.state.error !== undefined ?
            <p className="error text-danger">Incorrect username or password</p> : <p/>;
        return (
            <div  className="container flex-direction">
                <h3 className="d-flex justify-content-center">Please Enter Your Username And Password</h3>
                {error}
                <LogInForm onSubmit={this.submit} />
            </div>
        )
    }
}

export default LogIn;