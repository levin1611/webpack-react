import React from 'react';
import ReactDOM from 'react-dom'; 
import Clock from './src/index'
var name = 'levin-jiang';
// class Clock extends React.Component{
//     render() {
//         return (
//             <div>
//                 <h1>hello react</h1>
//                 <h2>now is {this.props.date.toLocaleTimeString()}.</h2>
//                 <p>it`s time go bed</p>
//             </div>
//         )
//     }
// }
// ReactDOM.render(
//     <Clock date="{new Date()}" />,
//     document.getElementById('app')
// )
function tick(){
    ReactDOM.render(
        <Clock date={new Date()} name={name}/>,
        document.getElementById('app')
    )
}
setInterval(tick,1000)