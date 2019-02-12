import React from 'react';
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit =this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.value == ''){
            alert('你倒是输入点东西啊');
            return;
        }
        alert('A name was submitted: '+ this.state.value);
        
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Email address</label>
                <input name="inputval" type="text" value={this.state.value} className="form-control" placeholder="name@example.com" onChange={this.handleChange}/>
                </div>
                <div className="inputVal">{this.state.value}</div>
                <div className="form-group">
                    <button type="submit" className="btn">submit</button>
                </div>
            </form>
        )
    }
}
class Textarea extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.value == ''){
            alert('你倒是写点东西啊');
            return;
        }
        alert('A name was submitted: '+ this.state.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>textArea</label>
                    <textarea className="form-control" value={this.state.value} onChange={this.handleChange}></textarea>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn btn-primary">submit</button>
                </div>
            </form>
        )
    }
}
class Select extends React.Component{
    constructor(props){
        super(props);
        this.state={value:''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        if(this.state.value == ''){
            alert('你倒是选点东西啊');
            return;
        }
        alert('A name was submitted: '+ this.state.value);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>select</label>
                    <select className="form-control" value={this.state.value} onChange={this.handleChange}>
                        <option value="">place selected</option>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </div>
                <div className="form-group">
                    <button type="submit" className="btn">submit</button>
                </div>
            </form>
        )
    }
}
class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleInputChange(e){
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
          <form>
            <label>
              Is going:
              <input
                name="isGoing"
                type="checkbox"
                checked={this.state.isGoing}
                onChange={this.handleInputChange} />
            </label>
            <br />
            <label>
              Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={this.handleInputChange} />
            </label>
          </form>
        );
      }
}
export {NameForm,Textarea,Select,Form} 