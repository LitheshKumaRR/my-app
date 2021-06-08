
import React from 'react'

class ContactList extends React.Component{
    constructor(props){
        super(props);
    }
    pushData=(contact)=>{
        this.props.getdata(contact)

    }
    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table table-hover table-primary table-striped">
                            <thead className="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>IMAGE</th>
                                    <th>NAME</th>
                                    <th>AGE</th>
                                    <th>LOCATION</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.data !=null ? (<> 
                                {this.props.data.map((contactData)=>{
                                    return(
                                        <>
                                        <tr onMouseOver={this.pushData.bind(this,contactData)}>
                                            <td>{contactData.login.uuid}</td>
                                            <td><img src={contactData.picture.medium}/></td>
                                            <td>{contactData.name.first}</td>
                                            <td>{contactData.dob.age}</td>
                                            <td>{contactData.location.city}</td>
                                        </tr>
                                        </>
                                    )
                                })}
                                
                                </>):null}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ContactList