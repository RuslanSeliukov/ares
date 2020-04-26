import React from 'react';
import { Field, reduxForm } from 'redux-form';

class LogInForm extends React.Component {

    render() {
        const {handleSubmit} = this.props;
        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <Field
                        name="username"
                        component="input"
                        type="text"
                        placeholder="Username"
                    />
                    <Field
                        name="password"
                        component="input"
                        type="password"
                        placeholder="Password"
                    />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

LogInForm = reduxForm({
    form: "logInForm"
})(LogInForm);

export default LogInForm;