import React from 'react';
import axios from 'axios';
import store from "../redux/store/store";
import {addBooks} from "../redux/actions/action";
import {connect} from "react-redux";
import {BookCard} from "./BookCard";

class Cards extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            books: undefined
        };
    }

    componentDidMount() {
        axios({
            method: 'get',
            url: '/api/getBooks'
        }).then(function (response) {
            store.dispatch(addBooks(response.data));
        }.bind(this));
    }

    render() {
        return (
            <div>
                {this.props.books.map(book =>
                    <div key={book.id}>
                        <BookCard book={book} />
                    </div>
                )}
            </div>
        )
    }
}

const mapStateToProps = function(state) {
    return {
        books: state.mainStore.books,
    };
};

export default connect(mapStateToProps)(Cards);