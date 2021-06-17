import React from 'react'

function ContactCard(props) {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card">
                        <div className="card-header">EMPLOYEE DETAILS</div>
                        <div className="card-body">
                            <ul>
                                <li>name:{props.selectedContacts.name}</li>
                                <li>Email:{props.selectedContacts.email}</li>
                                <li>Address:{props.selectedContacts.address.city}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}

export default ContactCard
