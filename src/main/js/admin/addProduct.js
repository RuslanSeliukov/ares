import React from 'react';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Name:
                        <input type="text" />
                    </label>
                    <label>
                        Author Name:
                        <input type="text" />
                    </label>
                    <input type="file" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

} export default AddProduct;