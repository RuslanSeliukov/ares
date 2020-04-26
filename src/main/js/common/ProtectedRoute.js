import React from 'react'
import { Redirect } from 'react-router-dom'
import AuthUtil from "./AuthUtil";

class ProtectedRoute extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          isValid: undefined
        };
    }

    async componentDidMount() {
        let isValid = await AuthUtil.isAuthenticated(localStorage.getItem('token'));
        this.setState({
            isValid: isValid.data.isValid
        });
    }

    render() {
        const {component: Component, ...rest} = this.props;

        if (this.state.isValid) {
            return <Component {...rest} />
        } else {
            if (this.state.isValid === undefined) {
                return <h3>LOADING...</h3>
            } else {
                return <Redirect to={
                    {
                        pathname: "/login"
                    }
                }/>
            }
        }
    }
} export default ProtectedRoute;
