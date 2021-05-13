import React from 'react';
import CompC from './Componentc'
function CompB(props){
    return(
    <>
    <h1>ComponentB</h1>
    <hr />
    <CompC UserInfo={props.UserInfo}/>
    </>
    )
}

export default CompB