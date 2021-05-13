import React from 'react';
function Contacts(){
    return(
        <>
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-5"></div>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3634632847798!2d77.70208171468607!3d13.012510990829021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae11aeab858e35%3A0xf8f534df379561ed!2sCambridge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1620747384484!5m2!1sen!2sin" width="400" height="300" allowfullscreen="" loading="lazy"></iframe>
                        <div className="col-md-7">
                            <form>
                                <div className="form-group">
                                    <input type="text" placeholder="name" className="form-control" />
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Contacts;