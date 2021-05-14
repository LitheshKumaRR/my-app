import React from "react";
import Customer from './Customer'
import  '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <React.Fragment>
      <nav className="navbar navabar-dark bg-dark">
        <a href="/"> React List Rending</a>
      </nav>
      <Customer />
    </React.Fragment>
  );
}

export default App;