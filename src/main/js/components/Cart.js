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
                <div className="container flex-direction">
                    {this.props.cart.map( cartItem =>
                        <div className="d-flex justify-content-right">
                            <CartItem cartItem={cartItem} />
                        </div>
                    )}
                    <div className="d-flex flex-row-reverse">
                        <Link to="/order">
                            <button className="btn btn-success" type="button">Place An Order</button>
                        </Link>
                    </div>
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