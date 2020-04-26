import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AuthUtil from "../common/AuthUtil";

class HeaderMenu extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: undefined,
            isUserAuthenticated: undefined
        };
    }

    async componentDidMount() {
        let isValid = await AuthUtil.isAuthenticated(localStorage.getItem('token'));
        this.setState({
            isUserAuthenticated: isValid.data.isValid
        });
    }

    render() {
        let adminLink;
        let userLink;

        if (this.props.username === undefined) {
            userLink = <Link style={{margin: "5px"}} to="/login">Log In</Link>
        } else {
            userLink = <Link style={{margin: "5px"}} to="/">{this.props.username}</Link>
        }
        if(this.props.isUserAuthenticated) {
            adminLink = <Link style={{margin: "5px"}} to="/admin/addProduct">Add New Book</Link>
        }
        return (
            <div style={{display: "flex", justifyContent: "center"}} >
                <Link style={{margin: "5px"}} to="/">Main Page</Link>
                {adminLink}
                <Link style={{margin: "5px"}} to="/cart">Cart</Link>
                {userLink}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        username: state.mainStore.username,
        isUserAuthenticated: state.mainStore.isUserAuthenticated
    };
};

export default connect(mapStateToProps)(HeaderMenu);