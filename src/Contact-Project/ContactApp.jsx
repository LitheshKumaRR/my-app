import React, { useState,useEffect } from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactCard from './ContactCard'

function ContactApp(){
    let[emp,setEmp]=useState({contacts:'',errmessage:null,selectedContacts:{}})

     useEffect(()=>{
        let Api_URL="https://dummy.restapiexample.com/api/v1/employees"
        Axios.get(Api_URL)
        .then((response)=>{
            setEmp({...emp,contacts:response.data})
        })
        .catch((err)=>{
            setEmp({...emp,errmessage:err})
        })

    })
    let pullData=(contactData)=>{
        setEmp({...emp,selectedContacts:contactData})

    }


    return(
        <>
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-8">
                    <ContactList data={emp.contacts} getData={pullData}/>
                </div>
                <div className="col-md-4">
                {Object.keys(emp.selectedContacts).length > 0 ? (
              <>
                <ContactCard selectedContact={emp.selectedContacts} />
              </>
            ) : null}
                </div>
            </div>
        </div>
        </>
    )
}

export default ContactApp