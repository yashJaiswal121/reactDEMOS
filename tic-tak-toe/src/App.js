import React, { Component } from 'react';
import CellComponent from './CellComponent';
import ReactDOM from 'react-dom';

class App extends React.Component {


    constructor(props)
    {
      super(props);
      this.state= {dimension: this.props.dimension};
       this.checkResult=this.checkResult.bind(this);
    }

    c=0;
    cols=function(){    //or cols=()=>{
      var arr_cols=[];
      var elemt;
        for(var i=1;i<=this.state.dimension;i++){
         this.c++;
          elemt=<td id={this.c.toString()} >
        <CellComponent  />
          </td>; //here 'this' is imp to refer 'c' as it is a global 
          arr_cols.push(elemt);

        } 
        return arr_cols;
    }


    rows=()=>{
    var arr_rows=[];
    var elemt;
    for(var i=1;i<=this.state.dimension;i++){
      elemt=<tr>{this.cols()} </tr>;  //here 'this' is important in calling 'cols' as it is a global property
      arr_rows.push(elemt);

    }
    return arr_rows;

    }

    checkResult(){
      //case1
        var i=1,j=1;
        var firstcell=document.getElementById("1").innerText;
     
      //horizontal
         for(i=1;i<=this.state.dimension;i++)
         {


            if(!(document.getElementById(i.toString()).innerText == firstcell) )
            {console.log(firstcell +" lost!!! horizontal");
            break;
            }
         
        
          }
var dimen=this.state.dimension;

           //vertical
         for(var j=1;j<dimen*dimen;)
          {
           if(!(document.getElementById(j.toString()).innerText == firstcell) )
          {
            console.log(firstcell +" lost!!!vertical");
             //break;
           }
           j=j+Number(dimen);
           //console.log(j);
        
           }
        
           //diagnal
           


      //case2


      //case3


      //case4

    }

  render() {
  
    const tabl=<table width='200' height='200'>
    {this.rows()}
     </table>;

    return (
      <div className="App">
     {tabl}
     <button onClick={this.checkResult}>Check Result</button>
        </div>
    );
  }
}

export default App;
