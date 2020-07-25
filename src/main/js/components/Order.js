import React from 'react';
import OrderForm from "./forms/OrderForm";
import axios from "axios";
import store from "../redux/store/store";
import {cleanCart} from "../redux/actions/action";

class Order extends React.Component {

    constructor(props) {
        super(props);
    }

    submit = values => {
        return axios({
            method: 'post',
            url: '/api/placeOrder',
            data: values
        }).then(function () {
            this.props.history.push("/thanks");
            store.dispatch(cleanCart());
        }.bind(this))
    };

    render() {
        return (
            <div>
                <h3>Order Page</h3>
                <OrderForm onSubmit={this.submit} />
            </div>
        )
    }
}

export default Order;
