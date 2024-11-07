import React from 'react'
import { contactBanner } from '../../Assets'
import ContactForm from './ContactForm'
const ContactSection = () => {
  return (
    <div className="contact-main-cover-wrapper">
        <div className="row">
            <div className="col-lg-5">
                <img src={contactBanner} alt="Contact banner"></img>
            </div>
            <div className='col-lg-7'>
              <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default ContactSection
