import React from 'react';
import axios from 'axios';
import store from "../redux/store/store";
import {addBooks} from "../redux/actions/action";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

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
                <BookCard books={this.props.books} />
            </div>
        )
    }
}

/*Need to put in separate file*/
const BookCard = ({books}) => (
    <div className="container d-flex flex-column">
        {books.map(book => (
            <div className="card justify-content-center">
                <div className="text-center text-element">{book.bookName}</div>
                <div>
                    <Link to={{pathname: `/BookInfo/${book.id}`, state: {bookId: book.id}}} >
                        <img style={{width: "180px", height: "250"}} src={"data:image/png;base64," + book.pictureData}/>
                    </Link>
                </div>
            </div>
        ))}
    </div>
);

const mapStateToProps = function(state) {
    return {
        books: state.mainStore.books,
    };
};

export default connect(mapStateToProps)(Cards);