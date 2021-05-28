import React from 'react'
import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import ContactTable from './Data'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Message from './Message'
function App(){
   
    return(
        <>
        <Router>
            <Navbar/>
            <Switch>
                <Route path="/data" component={ContactTable}/>
                <Route path="/message" exact component={Message} />
            </Switch>
        </Router>
        
        </>
    )
} 

export default App