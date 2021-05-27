import React from 'react'
/*import '../node_modules/bootstrap/dist/css/bootstrap.min.css'*/
import Navbar from './Website/Navbar/Navbar'
import Landingpage from './Website/Navbar/Landing-page/Landingpage'
import Cards from './Cards/Cards'
import Contact from './Website/Navbar/Contact/Contact'
import Infobox from './Website/Navbar/Infobox/Infobox'
import Footer from './Website/Navbar/Footer/Footer'
let App =()=>{
    return(
        <>
        <Navbar/>
        <Landingpage/>
        <Cards/>
        <Contact/>
        <Infobox/>
        <Footer/>
    
        </>
    )
}

export default App;