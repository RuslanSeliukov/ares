import React from 'react';
import OrderForm from "./forms/OrderForm";
import axios from "axios";
import store from "../redux/store/store";
import {cleanCart} from "../redux/actions/action";

class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: undefined
        };
    }

    submit = values => {
        this.setState({error: undefined});
        const formData = new FormData();
        Object.keys(values).forEach(key => formData.append(key, values[key]));
        return axios({
            method: 'post',
            url: '/api/placeOrder',
            data: formData
        }).then(function () {
            this.props.history.push("/thanks");
            store.dispatch(cleanCart());
        }.bind(this)).catch(e => {
            this.setState({error: true})
        })
    };

    render() {
        let error = this.state.error !== undefined ?
            <p className="error text-danger">Your order was not submitted. There was some server issue</p> : <p/>;
        return (
            <div className="container flex-direction">
                <h3>Order Page</h3>
                {error}
                <OrderForm onSubmit={this.submit} />
            </div>
        )
    }
}

export default Order;
