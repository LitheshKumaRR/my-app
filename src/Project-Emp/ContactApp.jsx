import React from 'react'
import Axios from 'axios'
import ContactList from './ContactList'
import ContactCard from './ContactCard'

class ContactApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            contact:[],
            errMessage:null,
            selectedContact:null
        }
    }
    componentDidMount() {
        let API_URL =
          "https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist";
        Axios.get(API_URL)
          .then((response) => {
            console.log(response.data);
            this.setState({
              contact: response.data,
            });
          })
          .catch((err) => {
            this.setState({ errMessage: err });
          });
      }
    pullData=(contactData)=>{
        this.setState({selectedContact:contactData})

    }

    render(){
        return(
            <>
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                    <pre>{JSON.stringify(this.state.selectedContact)}</pre>
                    {this.state.contact ? (<> 
                    <ContactList data={this.state.contact} getdata={this.pullData}/>
                    
                    </>):null}
                    </div>
                    <div className="col-md-4">
                        {this.state.selectedContact !=null? (<>
                        <ContactCard selectedContact={this.state.selectedContact}/>
                        
                        </>):null}
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default ContactApp