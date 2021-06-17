import React from 'react'
import { useState ,useEffect} from 'react'
import ContactList from './Contactlist'
import Axios from 'axios'
import ContactCard from './ContactCard'
import { object } from 'prop-types'

function ContactApp(){
    let[msg,setMsg]=useState({contact:[],errMessage:null,selectedContacts:{}})
    useEffect(()=>{
    let API_URL="https://jsonplaceholder.typicode.com/users"
    Axios.get(API_URL)
    .then((response)=>{
        setMsg({...msg,contact:response.data})
    })
    .catch((err)=>{
        setMsg({...msg,errMessage:err})
    })

},[])
let pullData =((contactData)=>{
    setMsg({...msg,selectedContacts:contactData})
})

    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <ContactList data={msg.contact} getData={pullData}/>
        
                </div>
                <div className="col-md-4">
                    {Object.keys(msg.selectedContacts).length>0 ? (<> 
                    <ContactCard selectedContacts={msg.selectedContacts}/>
                    </>):null}
                </div>
            </div>
        </div>
        </>
    )

}

export default ContactApp
