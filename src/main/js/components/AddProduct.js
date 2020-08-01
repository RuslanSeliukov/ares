import React from 'react';
import AddProductForm from "./forms/AddProductForm";
import axios from 'axios';
import {reset} from 'redux-form';
import store from "../redux/store/store";

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: undefined,
            validationError: undefined
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    isValid (values, file) {
        if (file === undefined) {
            this.setState({
                validationError: 'Please fill in all fields'
            });
            return false
        } else {
            this.setState({
                validationError: undefined
            });
            return true;
        }
    }

    handleSubmit = values => {
        if (!this.isValid(values, this.state.file))
            return;

        const url = '/api/addProduct';
        const formData = new FormData();

        Object.keys(values).forEach(key => formData.append(key, values[key]));
        formData.append('file', this.state.file);

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        };

        axios.post(url, formData, config)
            .then(store.dispatch(reset('addProductForm')));
    };

    onChange (event) {
        if (event.target !== undefined) {
            this.setState({
                file: event.target.files[0],
                validationError: undefined
            })
        }
    };

    render() {
        let validationMessage = this.state.validationError !== undefined ?
            <p className="error text-danger">{this.state.validationError}</p> : <p/>;
        return (
            <div className="container flex-direction">
                <h3 className="d-flex justify-content-center">Add new book</h3>
                {validationMessage}
                <AddProductForm onSubmit={this.handleSubmit} onChange={this.onChange}/>
            </div>
        )
    }
}

export default AddProduct;