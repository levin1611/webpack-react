import React from 'react';
function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <div className="warning">
            Waring!
        </div>
    )
}
class Page1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning:true}
        this.handleToggleWarin = this.handleToggleWarin.bind(this)
    }
    handleToggleWarin() {
        // this.setState({
        //     showWarning:!this.state.showWarning
        // })
        this.setState(prevState => ({
            showWarning:!prevState.showWarning
        }))
    }
    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleWarin}>
                    {this.state.showWarning?'Hide':'Show'}
                </button>
            </div>
        )
    }
}
export default Page1