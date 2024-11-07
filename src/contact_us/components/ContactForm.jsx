import React from 'react'

const ContactForm = () => {
    return (
        <div className="contact-form-cover-wrapper">
            <div className='contact-form-text-content-cover'>
                <h6>We'd love to hear from you</h6>
            </div>
            <div className="contact-form-cover-wrapper">
                <form>
                    <div className='form-input-box'>
                        <input type="text" placeholder="Name*" required />
                    </div>
                    <div className='form-input-box'>
                        <input type="email" placeholder="Email*" required />
                    </div>
                    <div className='form-input-box'>
                        <input type="url" placeholder="Website URL*" />
                    </div>
                    <div className='form-input-box'>
                        <textarea rows={5} placeholder="Project Details*" required></textarea>
                    </div>

                    <button className="send-proposal-btn" type="submit">Send Proposal</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
