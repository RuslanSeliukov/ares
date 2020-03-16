import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Routes from "./common/routes";
import { Link } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./redux/store/store"

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
    <Provider store={store}>
        <BrowserRouter>
            <App/>
            <Routes/>
        </BrowserRouter>
    </Provider>
), document.getElementById('react'));