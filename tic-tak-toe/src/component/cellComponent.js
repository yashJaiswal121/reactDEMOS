import React,{Component} from 'react';
import  './cellCompon.css';

class cellComponent extends Component{

constructor(props)
{
    super(props);
    this.state={clicked:0,color:'black'};
    this.handleClicked=this.handleClicked.bind(this);

}

handleClicked(){
    this.setState(
        {clicked:1,color:'red'}
    );

    
}




render()
{
    const divStyle = {
        background:this.state.color,
        width:100,
        height:100

      };



    return(
        // <div className='cellDiv' style={{background:this.state.color}} onClick={this.handleClicked}>
            
        //     1
        //   </div>  

        <div style={divStyle} >
            hello world
        </div>

    );



}






}

export default cellComponent;