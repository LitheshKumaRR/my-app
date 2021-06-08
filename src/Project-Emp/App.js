import React from 'react'
import ContactApp from './ContactApp'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App(){
    return(
        <React.Fragment>
        <nav className="navbar navbar-dark bg-dark">
            <a href="/">PRACTISING REACT</a>
        </nav>
        <ContactApp/>
        </React.Fragment>
    )
}

export default App