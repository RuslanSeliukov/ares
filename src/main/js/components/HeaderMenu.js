import React from 'react';
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import AuthUtil from "../common/AuthUtil";
import store from "../redux/store/store";
import {logOut, setAuthentication} from "../redux/actions/action";
import UserDropdown from "./UserDropdown";
import { withRouter } from "react-router-dom";

class HeaderMenu extends React.Component {

    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

    async componentDidMount() {
        let response = await AuthUtil.isAuthenticated(localStorage.getItem('token'));
        store.dispatch(setAuthentication({
            isValid: response.data.isValid
        }));
    }

    logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("token");
        store.dispatch(logOut());
        this.props.history.push("/");
    };

    addBook = () => {
        this.props.history.push("/admin/addProduct");
    };

    render() {
        let userLink;

        if (this.props.isUserAuthenticated) {
            userLink = <UserDropdown username={this.props.username} addBook={this.addBook} logOut={this.logOut}/>;
        } else {
            userLink = <Link className="m-3" to="/login">Log In</Link>
        }
        return (
            <div className="header-menu" style={{display: "flex", justifyContent: "center"}} >
                <Link className="m-3" to="/">Main Page</Link>
                <Link className="m-3" to="/cart">Cart</Link>
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

export default withRouter(connect(mapStateToProps)(HeaderMenu));