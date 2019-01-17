import React from 'react';
import ReactDOM from 'react-dom';
class Clock extends React.Component{
    render(){
        return (
            <div>
                <h1>hello react</h1>
                <h2>now is {this.props.date.toLocaleTimeString()}.</h2>
                <p>{this.props.name} it`s time go bed</p>
            </div>
        )
    }
}
export default Clock
