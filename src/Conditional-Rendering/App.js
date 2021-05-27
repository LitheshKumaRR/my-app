import React from 'react'
import  "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Loc from './Pre'


function App() {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <a href="/"> React List Rending</a>
            </nav>
            <Loc/>
        </React.Fragment>
    )
    }

export default App;