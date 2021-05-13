import React from 'react';
function CompC(props){
    return(
    <>
    <h1>ComponentC</h1>
    <span>{JSON.stringify(props.UserInfo)}</span>
    </>
    )
}

export default CompC