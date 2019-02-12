import React from 'react'
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name:'',
            Introduce:'',
            Select:props.option[0].name
        };
        console.log(props)
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleIntroduceChange = this.handleIntroduceChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(event){
        this.setState({Name:event.target.value});
    }
    handleIntroduceChange(event){
        this.setState({Introduce:event.target.value});
    }
    handleSelectChange(event){
        console.log(event)
        this.setState({Select:event.target.value});
    }
    handleSubmit(event){
        alert('你输入的Name是 '+this.state.Name);
        alert('你输入的Introduce是 '+this.state.Introduce);
        alert('你选择的Select是 '+this.state.Select);
        event.preventDefault();
    }
    render(){
        const options = this.props.option;
        function OptionItem(props){
            return <option id={props.items.id}>{props.items.name}</option>
        }
       
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
                    <input type="text" name="Name" value={this.state.Name} onChange={this.handleNameChange} />
                </label>
                <label>
                    Introduce:
                    <textarea value={this.state.Introduce} onChange={this.handleIntroduceChange}></textarea>
                </label>
                <label>
                    Select:
                    <select value={this.state.Select} onChange={this.handleSelectChange}>
                       {options.map((opt) => 
                            <OptionItem items={opt} key={opt.id.toString()}/>
                        )}
                    </select>
                </label>
                <button type="submit">提交</button>
            </form>
        )
    }
}
export default NameForm