import {Field, reduxForm} from "redux-form";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class AddProductForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        const {onChange} = this.props;
        return (
            <Form onSubmit={handleSubmit}>

                <Form.Group controlId="bookName">
                    <Form.Label>Book name</Form.Label>
                    <Field className="form-control" name="bookName" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="author">
                    <Form.Label>Author</Form.Label>
                    <Field className="form-control" name="author" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Field className="form-control" name="price" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="publisher">
                    <Form.Label>Publisher</Form.Label>
                    <Field className="form-control" name="publisher" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="language">
                    <Form.Label>Language</Form.Label>
                    <Field className="form-control" name="language" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="publicationDate">
                    <Form.Label>Publication date</Form.Label>
                    <Field className="form-control" name="publicationDate" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="printLength">
                    <Form.Label>Print length</Form.Label>
                    <Field className="form-control" name="printLength" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="productDimensions">
                    <Form.Label>Product dimension</Form.Label>
                    <Field className="form-control" name="productDimensions" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="binding">
                    <Form.Label>Binding</Form.Label>
                    <Field className="form-control" name="binding" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="isbn">
                    <Form.Label>ISBN</Form.Label>
                    <Field className="form-control" name="isbn" component="input" type="text"/>
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Field className="form-control" name="description" component="textarea" rows="5"/>
                </Form.Group>

                <div className="custom-file">
                    <input onChange={onChange} type="file" className="custom-file-input" id="customFile"/>
                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                </div>

                <Button className="mt-3 mb-5" variant="success" type="submit">Submit</Button>
            </Form>
        )
    }
}

AddProductForm = reduxForm({
    form: "addProductForm"
})(AddProductForm);

export default AddProductForm;