import React from 'react'
import ComponentA from './ComponentA'

let App =()=>{
    let UserInfo={
        username:"lithesh",
        email:"lithesh@gamil.com"
    }
    return(
        <>
        <h1>ok</h1>
        <pre>{JSON.stringify(UserInfo)}</pre>
        <ComponentA/>
        </>
    )
}
export default App