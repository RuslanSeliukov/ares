import {Field, reduxForm} from "redux-form";
import React from "react";

class AddProductForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        const {onChange} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Book Name:
                        <Field name="bookName" component="input" type="text"/>
                    </label>
                    <label>
                        Author Name:
                        <Field name="author" component="input" type="text"/>
                    </label>
                    <label>
                        Publisher:
                        <Field name="publisher" component="input" type="text"/>
                    </label>
                    <label>
                        Language:
                        <Field name="language" component="input" type="text"/>
                    </label>
                    <label>
                        Publication Date:
                        <Field name="publicationDate" component="input" type="text"/>
                    </label>
                    <label>
                        Print Length:
                        <Field name="printLength" component="input" type="text"/>
                    </label>
                    <label>
                        Product Dimensions:
                        <Field name="productDimensions" component="input" type="text"/>
                    </label>
                    <label>
                        Binding:
                        <Field name="binding" component="input" type="text"/>
                    </label>
                    <label>
                        ISBN:
                        <Field name="isbn" component="input" type="text"/>
                    </label>
                    <input type="file" onChange={onChange}/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

AddProductForm = reduxForm({
    form: "addProductForm"
})(AddProductForm);

export default AddProductForm;