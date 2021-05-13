import React from 'react';
import CompB from './ComponentB'
function ComponentA(){
    return(
    <React.Fragment>
        <h1>ComponentA</h1>
        <hr/>
        <CompB UserInfo={props.UserInfo}/>
    </ React.Fragment >
    )
}

export default ComponentA;