import React from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";
import store from "../redux/store/store";
import {cleanCart} from "../redux/actions/action";

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    onClick () {
        store.dispatch(cleanCart());
    }

    render() {
        return (
            <div>
                <div>
                    {this.props.cart.map( cartItem =>
                        <div>
                            <CartItem cartItem={cartItem} />
                        </div>
                    )}
                </div>
                <div>
                    <Link to="/order">
                        <button type="button" onClick={this.onClick}>Place An Order</button>
                    </Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = function (state) {
    return {
        cart: state.mainStore.cart
    }
};

export default connect(mapStateToProps)(Cart);