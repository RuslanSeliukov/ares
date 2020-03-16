import React from 'react';

class AddProduct extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            author: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    handleChange(event) {
        let i = 0;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Book Name:
                        <input type="text" value={name} onChange={this.handleChange}/>
                    </label>
                    <label>
                        Author Name:
                        <input type="text" onChange={this.handleChange}/>
                    </label>
                    <input type="file" />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }

} export default AddProduct;