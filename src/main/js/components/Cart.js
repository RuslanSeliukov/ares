import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {BookCard} from "./BookCard";
import Button from "react-bootstrap/Button";
import {removeFromCart} from "../redux/actions/action";
import store from "../redux/store/store";

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    removeFromCart = bookId => {
        store.dispatch(removeFromCart(bookId));
    };

    render() {
        if (this.props.cart.length === 0) {
            return (
                <>
                    <h3 className="d-flex justify-content-center">Your Cart Is Empty</h3>
                </>
            )
        }
        return (
            <div className="container flex-direction">
                <h3 className="d-flex justify-content-center mb-5">Cart</h3>
                <div key={Math.random().toString(36).substring(2)}
                     className="d-flex justify-content-right card border-0">
                    {this.props.cart.map(book =>
                        <div key={book.id} className="d-flex justify-content-around">
                            <BookCard book={book}/>
                            <div className="d-flex align-items-center">
                                <Button onClick={() => this.removeFromCart(book.id)} variant="danger">Remove</Button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="d-flex flex-row-reverse mb-5">
                    <Link to="/order">
                        <button className="btn btn-success" type="button">Place An Order</button>
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