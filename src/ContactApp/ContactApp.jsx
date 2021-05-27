import React ,{useEffect, useState}from 'react'
import Axios from "axios"
import ContactList from './Contactlist'
import ContactCard from './ContactCard'
function ContactApp (){
    let[bike,setBike]=useState({Contact:'',errMessage:null,selectedContact: {}})
    useEffect(()=>{
        let Api_URL= "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(Api_URL)
        .then((response)=>{
            setBike({...bike,Contact:response.data})
        })
        .catch((err)=>{
            setBike({...bike,errMessage:err})
        })
    },[])

    let pullData=(contactData)=>{
        setBike({...bike,selectedContact:contactData})

    }
    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <ContactList data={bike.Contact} getData={pullData}/>
                </div>
                <div className="col-md-4">
                {Object.keys(bike.selectedContact).length > 0 ? (
              <>
                <ContactCard selectedContact={bike.selectedContact} />
              </>
            ) : null}

                    
                </div>
            </div>
        </div>
        </>
    )
}
export default ContactApp