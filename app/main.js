import React from 'react';
import ReactDOM from 'react-dom'; 
import Index from './src/index';
import './assets/less/main.less';
import 'bootstrap/dist/css/bootstrap.css';
function formatName(user){
    return user.firstName + ' ' + user.lastName;
}
const user = {
    name:'levin-jiang',
    
}
function tick(){
    ReactDOM.render(
        <Index name={user.name}/>,
        document.getElementById('app')
    )
}
tick()
//setInterval(tick,1000)