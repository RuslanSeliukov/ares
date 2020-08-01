import {Field, reduxForm} from "redux-form";
import React from "react";

class AddProductForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        const {onChange} = this.props;
        return (
            <div className="container flex-direction add-product">
                <form onSubmit={handleSubmit}>
                    <div className="d-flex justify-content-center">
                        <label>
                            Book Name:
                            <Field name="bookName" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Author Name:
                            <Field name="author" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Publisher:
                            <Field name="publisher" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Language:
                            <Field name="language" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Publication Date:
                            <Field name="publicationDate" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Print Length:
                            <Field name="printLength" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Product Dimensions:
                            <Field name="productDimensions" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            Binding:
                            <Field name="binding" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <label>
                            ISBN:
                            <Field name="isbn" className="form-control" component="input" type="text"/>
                        </label>
                    </div>
                    <div className="d-flex justify-content-center">
                        <input type="file" className="form-control" onChange={onChange}/>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Submit" />
                </form>
            </div>
        )
    }
}

AddProductForm = reduxForm({
    form: "addProductForm"
})(AddProductForm);

export default AddProductForm;