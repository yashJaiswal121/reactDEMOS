import React, { Component } from 'react';
import TextField from './TextField/TextField';

//Synchronising Fields Celcius and Fahrenheit

class App extends Component {

    scale={
      sc1:'celcius',
      sc2:'fahrenheit'
    }

  constructor(props){
      super(props);
      this.state={cel:'',fah:''};
    this.handleCelTempChange=this.handleCelTempChange.bind(this);
    this.handleFahTempChange=this.handleFahTempChange.bind(this);
  }


  toCelcius(tempF){
    let tempCel=((tempF-32)*5)/9;
    return tempCel;

  }

  toFahrenheit(tempC){

    let tempFa=((tempC*9)/5)+32;
    return tempFa;

  }

  handleChange=(e)=>{
    if(e.target.name=="celcius"){
      this.handleCelTempChange(e);
    }else{
      this.handleFahTempChange(e);
    }

  }

  handleCelTempChange(e){
    console.log("handleCelTempChange");
   let val=e.target.value;
   let obj={cel:val,fah:this.toFahrenheit(Number(val))};
    this.setState(obj);
}

  handleFahTempChange(e){
    console.log("handleFahTempChange");
    let val1=e.target.value;
    let obj1={fah:val1,cel:this.toCelcius(Number(val1))};
    this.setState(obj1);
  }

  //onCelTempChange={this.handleCelTempChange}
  //onFahTempChange={this.handleFahTempChange}
  render() {
    return (
      <div className="App">
      <label>Celcius</label>
      <TextField scale="celcius" handleChange={this.handleChange} stateValues={this.state.cel} />   <br/>
      <label>Fahrenheit</label>
      <TextField scale="fahrenheit" handleChange={this.handleChange} stateValues={this.state.fah}/>    
      </div>
    );
  }
}

export default App;
