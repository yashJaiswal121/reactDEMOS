import React,{Component} from 'react';


class CellComponent extends React.Component{

constructor(props)
{
    super(props);
    this.state={clicked:0,color:'green', textt:'0'};
    this.handleClicked=this.handleClicked.bind(this);

}

chang=()=>{

    if(this.state.textt=='0')
    return 'x';
    else
    return '0';
}

handleClicked(){
    this.setState(
        {clicked:1,color:'red', textt:this.chang()
    }
    );

    
}




render()
{
  

    return(
        <div style={{backgroundColor: this.state.color }} onClick={this.handleClicked} >

           {this.state.textt}
        
          </div>  

        // <div style={{backgroundColor: "red"}} >
        //     hello world
        // </div>

    );



}






}

export default CellComponent;