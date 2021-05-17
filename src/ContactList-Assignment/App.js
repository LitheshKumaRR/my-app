import React from "react";
import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import ContactApp from './ContactApp'

function App() {
  return (
    <React.Fragment>
      <nav className="navbar navabar-dark bg-dark">
        <a href="/"> React List Rending</a>
      </nav>
      <ContactApp/>
    </React.Fragment> 
  );
}

export default App;