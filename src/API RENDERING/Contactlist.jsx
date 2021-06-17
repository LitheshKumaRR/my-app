import React from 'react'

function ContactList (props){
  let pushData = (contact)=>{
    props.getData(contact)

  }
  return(
    <>
    <pre>{JSON.stringify(props.data)}</pre>
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table table-hover table-primary table-striped">
            <thead className="bg-primary text-white">
              <tr >
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ADDRESS</th>
              </tr>
            </thead>
            {props.data.length >0 ? 
            (<>
            {props.data.map((contactData)=>{
              return(
                <>
              <tr onMouseOver={pushData.bind(this,contactData)}>
                <td>{contactData.id}</td>
                <td>{contactData.name}</td>
                <td>{contactData.email}</td>
                <td>{contactData.address.city}</td>
              </tr>
              </>
            )
          })}
            </>
            ):null}

            <tbody></tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  )
}

export default ContactList