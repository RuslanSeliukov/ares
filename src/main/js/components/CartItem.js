import React from 'react';
import {connect} from "react-redux";

class CartItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>{this.props.cartItem.bookName}</div>
                <div>
                    <img style={{width: "180px", height: "250"}} src={"data:image/png;base64," + this.props.cartItem.pictureData}/>
                </div>
                <div>
                    <p>Price: $</p>
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

export default connect(mapStateToProps)(CartItem);