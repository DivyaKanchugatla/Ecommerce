import React from 'react'
import './Newcontactus.css'

const Newcontactus = () => {

    const addresObject = [
        {icon:"fa fa-map-marker-alt", addressName:"123 Street, New York, USA"},
        {icon:"fa fa-envelope", addressName:"info@example.com"},
        {icon:"fa fa-phone-alt", addressName:"+012 345 67890"}
    ]

    const renderIcons = () => { return addresObject.map((item) => {
        const variableName = `${item.icon} text-primary contactus-icons mr-3`;
        return (
            <p className = "mb-0 contactus-text" key = {item.icon}><i className = {variableName}></i>{item.addressName}</p>
       )
    })}
    
   

  return (
    <div className="contact-us-page pt-0 mb-5 ">
        <div className="d-flex flex-column bg-secondary align-items-center justify-content-center contactus-first-container" >
            <h1 className="contact-us-heading text-uppercase mb-3">Contact Us</h1>
            <div className="d-inline-flex">
                <p className="m-0 contact-us-home"><a href="/">Home</a></p>
                <p className="m-0 contact-us-contact px-2">-</p>
                <p className="m-0 contact-us-contact">Contact</p>
            </div>
        </div>

        
      <div className="container-fluid pt-5 contactus-second-container mt-5">
        <div className="text-center mb-4">
            <h2 className="section-title px-5 decorated"><span class="px-2">Contact For Any Queries</span></h2>
        </div>
        <div className="row px-xl-5">
            <div className="col-lg-7 mb-5">
                <div className="contact-form">
                    <div id="success"></div>
                    <form name="sentMessage" id="contactForm" novalidate="novalidate">
                        <div className="control-group">
                            <input type="text" class="form-control contactus-input" id="name" placeholder="Your Name" required="required" data-validation-required-message="Please enter your name" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="email" class="form-control contactus-input" id="email" placeholder="Your Email" required="required" data-validation-required-message="Please enter your email" aria-invalid="false" />
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <input type="text" class="form-control contactus-input" id="subject" placeholder="Subject" required="required" data-validation-required-message="Please enter a subject"/>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div className="control-group">
                            <textarea className="form-control contactus-input" rows="6" id="message" placeholder="Message" required="required" data-validation-required-message="Please enter your message"></textarea>
                            <p className="help-block text-danger"></p>
                        </div>
                        <div>
                            <button className="contact-button py-2 px-4" type="submit" id="sendMessageButton">Send Message</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="col-lg-5 mb-5">
                <h5 className="font-weight-semi-bold mb-3">Get In Touch</h5>
                <p className='contact-para'>Justo sed diam ut sed amet duo amet lorem amet stet sea ipsum, sed duo amet et. Est elitr dolor elitr erat sit sit. Dolor diam et erat clita ipsum justo sed.</p>
                <div className="d-flex flex-column mb-3">
                    <h5 className="font-weight-semi-bold mb-3">Store 1</h5>
                    {renderIcons()}
                </div>
                <div className="d-flex flex-column">
                    <h5 className="font-weight-semi-bold mb-3">Store 2</h5>
                    {renderIcons()}
                </div>
            </div>
        </div>
    </div>
    
    </div>
  )
}

export default Newcontactus;