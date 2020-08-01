import React from "react";
import Dropdown from "react-bootstrap/Dropdown";

const UserDropdown = props => (

    <Dropdown className="m-3">
        <Dropdown.Toggle className="btn-sm" variant="success" id="dropdown-basic">
            {props.username}
        </Dropdown.Toggle>

        <Dropdown.Menu>
            <Dropdown.Divider />
            <Dropdown.Item onClick={props.logOut}>Log Out</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
);
export default UserDropdown