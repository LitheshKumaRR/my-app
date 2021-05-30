import React from 'react'
import ContactApp from './ContactApp'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(){
    return(
        <>
        <nav className="navbar navbar-dark bg-dark">
        <a href="/">FUNCTION EXAMPLE</a>
    </nav>
        <ContactApp/>
        </>
    )
}

export default App