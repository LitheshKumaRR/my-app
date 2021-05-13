import React from 'react';
import CompB from './ComponentB'
function CompA(){
    return(
    <React.Fragment>
        <h1>ComponentA</h1>
        <hr/>
        <CompB />
    </ React.Fragment >
    )
}

export default CompA