import React from 'react';
import imageone from "../../../Assets/images/a.jpg"
import imagetwo from "../../../Assets/images/c.jpg"
 
function Cards() {
    return (
      <>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
                <img src={imageone} alt="" />
                <div className="card-body">
                  <h2> Paris</h2>
                  <p> More About Paris</p>
                  <button className="btn btn-primary"> Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={imagetwo} alt="" />
                <div className="card-body">
                  <h2> Paris</h2>
                  <p> More About Paris</p>
                  <button className="btn btn-primary text-center">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={imageThree} alt="" />
                <div className="card-body">
                  <h2> Paris</h2>
                  <p> More About Paris</p>
                  <button className="btn btn-primary"> Book Now</button>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="card">
                <img src={imageFour} alt="" />
                <div className="card-body">
                  <h2> Paris</h2>
                  <p> More About Paris</p>
                  <button className="btn btn-primary"> Book Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Cards;
  
  