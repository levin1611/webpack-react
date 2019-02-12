import React from 'react';
import ReactDOM from 'react-dom';
import Header from './header';
import Clock from './Clock';
import {Lists,Ullist} from '../../src/company/page2-array';
import NameForm from './form';
import FormRef from './formRef';
import Calculator from './promote'
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
const optionItem =[
    {id:1,name:'aaa'},
    {id:2,name:'bbb'},
    {id:3,name:'ccc'},
    {id:4,name:'ddd'}
]
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
                <div className="container projects">
                    <div className="projects-header page-header">
                        <h2>Bootstrap相关优质项目推荐</h2>
                        <p>这些项目或者是对Bootstrap进行了有益的补充，或者是基于Bootstrap开发的</p>
                    </div>
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
                    <div className="row">
                        <div className="col-md-3">
                            <ul>{Lists}</ul>
                        </div>
                        <div className="col-md-3">
                            <Welcome name="姜玉庄"></Welcome>
                        </div>
                        <div className="col-md-3">
                            <Welcome name="姜莱"/>
                        </div>
                        <div className="col-md-3">
                            <NameForm option={optionItem}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className='col-md-12'>
                            <FormRef />
                        </div>
                        <div className="col-md-12">
                            <Calculator />
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Index