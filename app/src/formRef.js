import React from 'react';
class FormRef extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        alert('A name was submitted: ' + this.input.value);
        e.preventDefault();
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                Name:
                <input type="text" name="Name" ref={(input1) => this.input = input1} />
                </label>
                <label>
                Age:
                <input defaultValue="Bob" type="text" name="Age" ref={(input) => this.input = input} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        )
    }
}
export default FormRef