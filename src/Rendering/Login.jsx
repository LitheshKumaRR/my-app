import React from 'react'
class Login extends React.Component{
    constructor(props){
        super(props)
       this.state = {
            message:"",
            isLoggedIn:'false'
        };
    
    };

    Login = ()=>{
      this.setstate({
           ...this.state,
            message:"okay"
        });
    }
        logout = () =>{
            this.setstate({
                ...this.state,
                message:"oky"
            })
        }
    
    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8">
                            <div className="card"></div>
                            <div className="card-header">
                                <h4>conditional rendering</h4>
                            </div>
                            <div className="card-body">
                            <button className="btn btn-success" onClick={this.Login}>Login</button>
                        <button className="btn btn-danger" onClick={this.logout}>Logout</button>
                        <h1>....{this.state.message}</h1>
                            </div>
                        </div>
                    </div>
                </div>

         
            </ React.Fragment>
        );
    }
};

export default Login;