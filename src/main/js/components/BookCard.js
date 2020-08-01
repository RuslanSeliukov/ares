import {Link} from "react-router-dom";
import React from "react";

export const BookCard = (props) => (
    <div className="container d-flex flex-column">
        <Link key={props.book.id} to={{pathname: `/BookInfo/${props.book.id}`, state: {bookId: props.book.id}}}>
            <div className="card justify-content-center">
                <div className="text-center header-element">{props.book.bookName}</div>
                <div className="d-flex justify-content-around">
                    <div>
                        <img className="card-image" src={"data:image/png;base64," + props.book.pictureData}
                             alt=""/>
                    </div>
                    <div className="ml-3">
                        <div className="mb-3">Price: {props.book.price}</div>
                        <div className="text-justify">Description: {props.book.description}</div>
                    </div>
                </div>
            </div>
        </Link>
    </div>
);