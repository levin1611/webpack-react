import React from 'react';
function BoilingVerdict(props){
    if(props.celsius >= 100){
        return <p>水烧开了</p>;
    }else{
        return <p>水没开呢！</p>;
    }
}
function toCelsius(fahrenheit){
    return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius){
    return (celsius*9/5)+32
}
function tryConvert(temperature,convert){
    const inputVal = parseFloat(temperature);
    if(Number.isNaN(inputVal)){
        return '';
    }
    const output = convert(inputVal);
    const rounded = Math.round(output *1000) /1000;
    return rounded.toString()
}
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};
class TemperatureInput  extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            temperature: ''
        }
    }
    handleChange(e){
        // this.setState({
        //     temperature:e.target.value
        // })
        this.props.onTemperatureChange(e.target.value)
    }
    render(){
        const temperature =this.props.temperature;
        const scale =this.props.scale;
        return(
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]}:</legend>
                <input 
                    value={temperature}
                    onChange={this.handleChange}
                />
            </fieldset>
        )
    }
}
class Calculator extends React.Component{
    constructor(props){
        super(props);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }
    handleCelsiusChange(temperature){
        this.setState({
            temperature, scale: 'c'
        })
    }
    handleFahrenheitChange(temperature){
        this.setState({
            temperature,scale:'f'
        })
    }
    render(){
        const scale =this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature,toCelsius) : temperature;
        const fahrenheit  = scale === 'c' ?tryConvert(temperature,toFahrenheit) :temperature;
        return(
            <div>
                <TemperatureInput
                    temperature={celsius}
                    scale="c"
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale="f"
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)} />
            </div>
        )
    }
}
export default Calculator