import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Field, reduxForm} from "redux-form";


let OrderForm = props => {
    const { handleSubmit } = props;

    return <Form onSubmit={handleSubmit}>

        <Form.Group controlId="firstName">
            <Form.Label>First name</Form.Label>
            <Field className="form-control" name="firsName" component="input" type="text"/>
        </Form.Group>

        <Form.Group controlId="lastName">
            <Form.Label>Last name</Form.Label>
            <Field className="form-control" name="lastName" component="input" type="text"/>
        </Form.Group>

        <Form.Group controlId="email">
            <Form.Label>Email address</Form.Label>
            <Field className="form-control" name="email" component="input" type="email"/>
        </Form.Group>

        <Form.Group controlId="phoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Field className="form-control" name="phoneNumber" component="input" type="number"/>
        </Form.Group>

        <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Field className="form-control" name="city" component="input" type="text"/>
        </Form.Group>

        <Form.Group controlId="postIndex">
            <Form.Label>Post Index</Form.Label>
            <Field className="form-control" name="postIndex" component="input" type="number"/>
        </Form.Group>

        <Button  variant="success" type="submit">
            Submit
        </Button>
    </Form>
};

OrderForm = reduxForm({
    form: 'orderForm'
})(OrderForm);

export default OrderForm;
