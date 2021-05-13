import React from "react";
class Info extends React.Component{
    state={
emp_salary:35000,
    }
    hike= (value) =>{
        this.setState({
            emp_salary:30000+value,
        })
    }
    render(){
        return(
        <>
        <h1>empsalary {this.state.emp_salary}</h1>
        <button onClick={this.hike.bind(this,this.state.emp_salary)}>hike 50k</button>
        <button onClick={this.hike.bind(this,this.state.emp_salary)}>hike 70k</button>
        <button onClick={this.hike.bind(this,this.state.emp_salary)}>hike 90k</button>
        </>
        );  
    } 
} 
export default Info;