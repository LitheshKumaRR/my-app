import React from 'react';
import imageone from "../../../Assets/images/a.jpg"
import imagetwo from "../../../Assets/images/c.jpg"
 
function Cards(){
    return(
        <>
        <div className="container mt-3">
            <div className="row">
                <div className="col-md-2">
                    <div className="card">
                        <img src={imageone} alt="height=20vh" />
                        <div className="card-body">
                            <p>okay click to the next one my dear subscriber</p>
                            <button className="btn btn-primary">Book now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="container mt-2">
            <div className="row">
                <div className="col-md-2">
                    <div className="card">
                        <img src={imagetwo} alt="" />
                        <div className="card-body">
                            <p>okay click to the next one my dear subscriber</p>
                            <button className="btn btn-primary">Book now</button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        
        </>
    )
}

export default Cards;