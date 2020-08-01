import React from 'react';
import axios from 'axios';
import store from "../redux/store/store";
import {addCurrentBook, addToCart, removeCurrentBook} from "../redux/actions/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class BookInfo extends React.Component {

    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    /*Done for studying purpose, need to replace with fetching certain data from store*/
    componentDidMount() {
        axios({
            method: 'get',
            url: '/api/getBookInfo',
            params: {
                bookId: this.props.location.state.bookId
            }
        }).then(function (response) {
            store.dispatch(addCurrentBook(response.data));
        }.bind(this));
    }

    componentWillUnmount() {
        store.dispatch(removeCurrentBook());
    }

    onClick() {
        store.dispatch(addToCart(this.props.currentBook));
    }

    render() {
        return (
            (typeof this.props.currentBook != 'undefined')?
            <div className="container flex-row">
                <div className="d-flex justify-content-center">
                    <img style={{width: "280px", height: "250"}} src={"data:image/png;base64," + this.props.currentBook.pictureData}/>
                </div>
                <div className="mb-5 mt-5">
                    <h3>Information: </h3>
                    <p>Book Name: {this.props.currentBook.bookName}</p>
                    <p>Author: {this.props.currentBook.author}</p>
                    <p>Price: {this.props.currentBook.price}</p>
                    <p>Language: {this.props.currentBook.language}</p>
                    <p>Print Length: {this.props.currentBook.printLength}</p>
                    <p>Dimension: {this.props.currentBook.productDimension}</p>
                    <p>Publication Date: {this.props.currentBook.publicationDate}</p>
                    <p>Publisher: {this.props.currentBook.publisher}</p>
                    <p>ISBN: {this.props.currentBook.isbn}</p>
                    <p>Binding: {this.props.currentBook.binding}</p>
                    <p>Description: {this.props.currentBook.description}</p>
                </div>
                <div className="d-flex justify-content-center mb-5">
                    <Link to="/cart">
                        <button className="btn btn-primary" type="button" onClick={this.onClick}>
                            Add to Cart {this.props.currentBook.price}</button>
                    </Link>
                </div>
            </div>
            :<div>loading....</div>
        )
    }
}

const mapStateToProps =  function (state) {
    return {
        currentBook: state.mainStore.currentBook
    };
};

export default connect(mapStateToProps)(BookInfo);