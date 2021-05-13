import React from 'react';
import ComponentC from './ComponentC'
import UserContext from './UserContext'
function CompB(){
    return(
    <>
    <h1>ComponentB</h1>
    <hr />
    <UserContext.Consumer>
        {
            (userInfo)=>(<span>{JSON.stringify(userInfo)}</span>)
        }
        <ComponentC />
    </UserContext.Consumer>

    </>
    )
}

export default CompB