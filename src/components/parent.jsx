import React from 'react';
import Child from './child'
class Parent extends React.Component{
    
    state={
        ChildData:'',
        asset :''
    };
    input2child=()=>{
        this.setState({asset:"50000USD"})
    }
    receivedata=(value)=>{
        console.log("Data from Child",value);
        this.setState({ChildData: value});
    }
    render(){
        ;
        return(
        <>
        <button onClick ={this.input2child}>Send 50k to Child</button>
        <h2>PARENT COMPONENT Asset value{this.state.asset}</h2>
        <h3>Receiving Data From Child:{this.state.ChildData}</h3>
        <br/>
        <Child asset={this.state.asset} data={this.receivedata}/>
        </>
        )
    }
}
export default Parent;