import {Field, reduxForm} from "redux-form";
import React from "react";

class AddProductForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        const {onChange} = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}}>
                <form onSubmit={handleSubmit}>
                    <div style={{margin: '5px'}}>
                        <label>
                            Book Name:
                            <Field name="bookName" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Author Name:
                            <Field name="author" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Publisher:
                            <Field name="publisher" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Language:
                            <Field name="language" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Publication Date:
                            <Field name="publicationDate" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Print Length:
                            <Field name="printLength" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Product Dimensions:
                            <Field name="productDimensions" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            Binding:
                            <Field name="binding" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <label>
                            ISBN:
                            <Field name="isbn" component="input" type="text"/>
                        </label>
                    </div>
                    <div style={{margin: '5px'}}>
                        <input type="file" onChange={onChange}/>
                    </div>
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