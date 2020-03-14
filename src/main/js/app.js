import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from "./common/routes";
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Link to="/admin/addProduct">Add New Book</Link>
            </div>
        )
    }
}

ReactDOM.render((
    <Provider>
        <BrowserRouter>
            <App/>
            <Routes/>
        </BrowserRouter>
    </Provider>
), document.getElementById('react'));