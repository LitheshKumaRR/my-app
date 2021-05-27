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
              <th>IMAGE</th>
              <th>NAME</th>
              <th>AGE</th>
              <th>LOCATION</th>
              </tr>
            </thead>
            {props.data.length >0 ? 
            (<>
            {props.data.map((contactData)=>{
              return(
                <>
              <tr onMouseOver={pushData.bind(this,contactData)}>
                <td>{contactData.login.uuid}</td>
                <td>
                  <img src={contactData.picture.medium}/>
                </td>
                <td>{contactData.name.first}</td>
                <td>{contactData.dob.age}</td>
                <td>{contactData.location.city}</td>
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