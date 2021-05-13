
import React from 'react';
class App extends React.Component{

    state={
        counter:0,
    };
    btnhandler= (value) =>{
        this.setState({
            counter:value
        })
    };
    render (){
        return(
        <>
<h1>TESTING {this.state.counter}</h1>
<button className="btn btn-danger" onClick={this.btnhandler.bind(this,this.state.counter+1)}> Increment </button>
<button className="btn btn-danger" onClick={this.btnhandler.bind(this,this.state.counter-1)}> Decrement </button>
            </>
        );
    }
}
export default App;
