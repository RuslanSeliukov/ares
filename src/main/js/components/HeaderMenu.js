import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AuthUtil from "../common/AuthUtil";
import store from "../redux/store/store";
import {setAuthentication} from "../redux/actions/action";

class HeaderMenu extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        let response = await AuthUtil.isAuthenticated(localStorage.getItem('token'));
        store.dispatch(setAuthentication({
            isValid: response.data.isValid
        }));
    }

    render() {
        let adminLink;
        let userLink;

        if (this.props.isUserAuthenticated) {
            userLink = <Link style={{margin: "5px"}} to="/">{this.props.username}</Link>;
            adminLink = <Link style={{margin: "5px"}} to="/admin/addProduct">Add New Book</Link>
        } else {
            userLink = <Link style={{margin: "5px"}} to="/login">Log In</Link>
        }
        return (
            <div className="header-menu" style={{display: "flex", justifyContent: "center"}} >
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