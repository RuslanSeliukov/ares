import React from 'react';
import {Field, reduxForm} from "redux-form";


let OrderForm = props => {
    const { handleSubmit } = props;

    return <div>
        <form onSubmit={handleSubmit}>
            <div style={{margin: '5px'}}>
                <label>
                    First Name:
                    <Field name="firsName" component="input" type="text"/>
                </label>
            </div>
            <div style={{margin: '5px'}}>
                <label>
                    Last Name:
                    <Field name="lastName" component="input" type="text"/>
                </label>
            </div>
            <div style={{margin: '5px'}}>
                <label>
                    Phone Number:
                    <Field name="phoneNumber" component="input" type="number"/>
                </label>
            </div>
            <div style={{margin: '5px'}}>
                <label>
                    Email:
                    <Field name="email" component="input" type="email"/>
                </label>
            </div>
            <div style={{margin: '5px'}}>
                <label>
                    City:
                    <Field name="city" component="input" type="text"/>
                </label>
            </div>
            <div style={{margin: '5px'}}>
                <label>
                    Post Index:
                    <Field name="postIndex" component="input" type="number"/>
                </label>
            </div>
            <button type="submit">Place Order</button>
        </form>
    </div>
};

OrderForm = reduxForm({
    form: 'orderForm'
})(OrderForm);

export default OrderForm;
