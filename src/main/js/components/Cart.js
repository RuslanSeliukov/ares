import React from 'react';
import {connect} from "react-redux";
import CartItem from "./CartItem";
import {Link} from "react-router-dom";

class Cart extends React.Component {

    constructor(props) {
        super(props);
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
                        <button type="button">Place An Order</button>
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