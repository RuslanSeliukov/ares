import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class LogInForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Field className="form-control" name="username" component="input" type="text"
                           placeholder="Username"/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Field className="form-control" name="password" component="input" type="password"
                           placeholder="Password"/>
                </Form.Group>

                <Button variant="success" type="submit">Submit</Button>
            </Form>
        )
    }
}

LogInForm = reduxForm({
    form: "logInForm"
})(LogInForm);

export default LogInForm;