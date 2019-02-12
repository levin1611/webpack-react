import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Page1 from './company/page1'
import {Lists,Ullist} from './company/page2-array'
import Blog from './company/blog.js'
import {NameForm,Textarea,Select,Form} from './company/form1'

let propsData = {
    firstName:'levin',
    lastName:'jiang'
}
const posts = [
    {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
    {id: 2, title: 'Installation', content: 'You can install React from npm.'}
];
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
                <LoginControl />
                <button onClick={this.handleClick}>
                    {this.state.isToggle ? 'ON' : 'OFF'}
                </button>
                <Page1 />
                <ul>{Lists}</ul>
                {Ullist}
                <Blog posts={posts}/>
                <NameForm />
                <Textarea />
                <Select />
                <Form />
                <ul>{Lists}</ul>
                <Blog posts={posts}/>
            </div>
            
        )
    }
}

function UserGreeting(){
    return (
        <h1>Welcome back!</h1>
    )
    
}
function GuestGreeting(){
    return (
        <h1>Please sign up.</h1>
    )
}
function LoginButton(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    )
}
function LogoutButton(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
}
class LoginControl extends React.Component{
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.state = {isLoginIn:false}
    }
    handleLoginClick(){
        this.setState({ isLoginIn:!this.state.isLoginIn})
    }
    render(){
        const isLoginIn = this.state.isLoginIn;
        let button = null;
        if(isLoginIn){
            button = <LoginButton onClick={this.handleLoginClick} />
        }else{
            button = <LogoutButton onClick={this.handleLoginClick} />
        }
        return (
            <div>
                {/* <Greeting isLoginIn={isLoginIn} />
                //{button} */}
                {isLoginIn ? (
                    <LoginButton onClick={this.handleLoginClick} />
                ) :
                (
                    <LogoutButton onClick={this.handleLoginClick} />
                )
                }
            </div>
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