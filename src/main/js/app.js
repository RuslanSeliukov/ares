import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from "./common/Routes";
import { Provider } from "react-redux";
import store from "./redux/store/store"
import Logo from "./components/Logo"
import HeaderMenu from "./components/HeaderMenu";
import "../resources/static/style.css"

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Logo/>
                <HeaderMenu/>
                <Routes/>
            </div>
        )
    }
}

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
), document.getElementById('react'));