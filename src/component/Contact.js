import React from "react";
function Contact() {
  return (
    <div className="contact-content font1 max-width-1 m-auto">
      <div className="">
        <h2>Feel Free to Contact Us</h2>
        <div className="contact-form mx-1">
          <div className="form-box">
            <input type="text" placeholder="Enter Your Name" />
          </div>
          <div className="form-box">
            <input type="text" placeholder="Enter Your phone number" />
          </div>
          <div className="form-box">
            <input type="text" placeholder="Enter your email" />
          </div>
          <div className="form-box">
            <textarea name="" id="" cols="30" rows="10" placeholder="How may be help we"></textarea>
          </div>
          <div className="form-box">
            <button className="btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
