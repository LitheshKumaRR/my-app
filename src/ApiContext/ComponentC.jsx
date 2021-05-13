import React from 'react';
import UserContext from './UserContext'
function ComponentC(){
    return (
    <div> 
    <h1>ComponentC</h1> 
    <UserContext.Consumer>
        { (userInfo)=> (<span>{JSON.stringify(userInfo)}</span>)
            
        }
    </UserContext.Consumer>
    <span>App Comp;</span>
    </div>
    )
}

export default ComponentC;