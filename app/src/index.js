import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Clock from './Clock'
function formatName(user){
    return user.firstName + '-' + user.lastName;
}
function getGreeting(user){
    if(user.name){
        return <h1>Hi,{user.name}!</h1>
    }else{
        return <h1>Hi,{formatName(user)}!</h1>
    }
}
function Welcome(props){
    return <b>hello,{props.name}</b>
}
function Avatar(props){
    return(
        <img className="Avatar"
            src={props.user.avatarUrl}
            alt={props.user.name}
        />
    )
}
function formatDate(date){
    return date.toLocaleTimeString()
}
function UserInfo(props){
    return(
        <div className="userInfo">
            <Avatar user={props.user} />
            <div className="userInfo-name">
                {props.user.name}
            </div>
        </div>
    )
}
function Comment(props){
    return(
        <div className="userCom">
            <UserInfo user={props.author}/>
            <div className="Comment-text">
                {props.text}
            </div>
            <div className="Comment-date">
                {formatDate(props.date)}
            </div>
        </div>
    )
}
const user = {
    name:'jyz-jiang',
    firstName:'levin',
    lastName:'jiang'
}
const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
      name: 'Hello Kitty',
      avatarUrl: require('../assets/img/userpic.jpg')
    }
  };
const userUrl = <img className="img" src={require('../assets/img/zheng.jpg')}/>
const element = (
    <h1>
        hello, {formatName(user)} 
    </h1>
)
const greeting =(
    <div>
        {getGreeting(user)}
    </div>
)
class Index extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            date: new Date()
        }
    }
    render(){
        return (
            <div className="coment">
                <Header></Header>
                <Comment 
                    date={comment.date}
                    text={comment.text}
                    author={comment.author}
                />
                <Clock />
                <Clock />
                <Clock />
                <h3>{this.state.date.getTime()}</h3>
                <p>{this.props.name} it`s time go bed</p>
                <section>{element}</section>
                <section>{greeting}</section>
                {userUrl}
                <Welcome name="姜玉庄"></Welcome>
                <Welcome name="姜莱"/>
            </div>
        )
    }
}
export default Index