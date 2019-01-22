import React from 'react';
import ReactDOM from 'react-dom';
let propsData = {
    firstName:'levin',
    lastName:'jiang'
}
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {isToggle:true};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (){
        //console.log(this)
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }))
        console.log(this.state.isToggle)
    }
    render(){
        return (
            <div>
                <LoggingButton data={propsData}/>
                <button onClick={this.handleClick}>
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
            </div>
            
        )
    }
}

class UserGreeting extends React.Component{
    render(){
        return (
            <h1>Welcome back!</h1>
        )
    }
}
class GutstGreeting extends React.Component{
    render(){
        return (
            <h1>Please sign up.</h1>
        )
    }
}
class LoggingButton extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    constructor(props){
        super(props);
        this.state ={
            datas:props.data
        }
    }
    componentDidMount(){
      
    }
    handleClick = () => {
      console.log('this is:', this);
    }
    delete = (name,e) => {
        console.log(name)
    }
    render() {
        let propsVal = this.state.datas;
        console.log(propsVal)
      return (
        <div>
            <div>
                <button onClick={this.handleClick}>
                    Click me
                </button>
                <button onClick={(e) => this.handleClick(e)}>
                    Click me
                </button>
            </div>
            <div>
                <button onClick={this.delete.bind(this,propsData)}>
                    Delete Row
                </button>
                <button onClick={(e) => this.delete('id', e)}>
                    Delete Row(e)
                </button>
            </div>
        </div>
      );
    }
  }
ReactDOM.render(
    <Toggle />,
    document.getElementById('app')
)