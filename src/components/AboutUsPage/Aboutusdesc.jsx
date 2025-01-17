import React from "react";
import slietlogo from "../../assets/images/slietlogo.png";
import techfestlogo from "../../assets/images/Logo.png";
function Aboutusdesc() {
  return (
    <div>
      <section className="container d-flex justify-content-center aboutusbox">
        <div className="bord image-block">
          <img className="logoimage" src={slietlogo} alt="Logo" />
        </div>
        <div className="image-block margin">
          <img className="logoimage" src={techfestlogo} alt="Logo" />
        </div>
      </section>
      <div className="row mt-5">
        <div className="col-sm-12 text-center d-flex justify-content-center align-items-center flex-column text-justify ">
          <h1 className="heading">techFEST'21</h1>
          <p className="text-justify  w-50">
          techFEST is the platform where engineers, innovators, changemakers, 
          entrepreneurs and tech enthusiasts collaborate to create solutions to
           some of the world’s most challenging problems. Participate in engaging
            events that are the ultimate test for your skills. Actively take part in
             workshops that will set you up with the experience and skillset for an 
             amazing career. There’s something for everyone here at techFEST - SLIET. Let’s Revitalize India with techFEST’21.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Aboutusdesc;
