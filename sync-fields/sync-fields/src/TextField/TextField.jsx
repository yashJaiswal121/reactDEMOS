import React,{ Component } from 'react';

class TextField extends React.Component{


    constructor(props){

        super(props);
        this.state={}

    }

 // onChange={(this.props.scale=="celcius")?this.props.onCelTempChange:this.props.onFahTempChange}
    render(){
        return(
        <div>
               
                <input type="text" name={this.props.scale} onChange={this.props.handleChange} value={(this.props.scale=="celcius")?this.props.stateValues:this.props.stateValues}/>



        </div>
        );

    }




}
export default TextField;