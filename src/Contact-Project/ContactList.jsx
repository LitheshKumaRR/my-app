import React from "react"

function ContactList(props){
    let pushData=(contacts)=>{
        props.getData(contacts)

    }

    return(
        <>
         <pre>{JSON.stringify(props.data)}</pre>
        <div className="container">
            <div className="row">
                <div className="col">
                    <table className="table table-hover table-primary table-striped">
                        <thead className="bg-primary text-black">
                            <tr>
                                <th>ID</th>
                                <th>Employee Name</th>
                                <th>Employee Salary</th>
                                <th>Employee Age</th>  
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.data.length>0 ? (<>
                            {props.data.map((contactData)=>{ 
                                return(
                                    <>
                                    <tr onMouseOver={pushData.bind(this,contactData)}>
                                        <td>{contactData.data.employee_name}</td>
                                        <td>{contactData.data.id}</td>
                                        <td>{}</td>
                                        <td>{}</td>
                                        <td>{}</td>
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

export default ContactList