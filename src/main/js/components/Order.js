import React from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

class Order extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h3>Order Page</h3>
            </div>
        )
    }
}

/*const mapStateToProps = function (state) {
    return {
        cart: state.mainStore.cart
    }
};*/

/*
export default connect(mapStateToProps)(Order);*/
export default Order;
