import React from 'react';
class Header extends React.Component{
    constructor(props){
        super(props);
        this.state={
            isToggle:false
        }
        this.activateLasers = this.activateLasers.bind(this)
    }
    activateLasers (){
        this.setState(prevState =>({
            isToggle : !prevState.isToggle
           
        })
        )
        console.log(this.state.isToggle)
    }
    render(){
        let isToggle = this.state.isToggle;
        let Login = null;
        if(!isToggle){
            Login = (
                <div className="btn">
                    <a className="" href="javascript:void(0)" onClick={this.activateLasers}>登陆下</a>
                </div>
            ) 
        }else{
            Login = (
                <div className="">
                    <div className="btn">
                        <a href="">显示登陆名称</a>
                    </div>
                    <div className="btn">
                        <a  href="javascript:void(0)" onClick={this.activateLasers}>退出</a>
                    </div>
                </div>
            )
        }
        return (
            <nav className="header">
                <div className="left">
                    <a className="btn btn-default">首页</a>
                </div>
                <div className="right">
                    {Login}
                </div>
            </nav>
        )
    }
}
export default Header