import React from 'react'
import { submitContactForm } from '../../Redux/contactFormSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setFormData, resetForm } from '../../Redux/contactFormSlice'
import { useEffect } from 'react'

const ContactForm = () => {

    const formData = useSelector((state) => state.contactForm.formData);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(setFormData({ [name]: value }));
    };

    useEffect(() => {
        console.log(formData)
    }, [formData])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(submitContactForm(formData));
    };


    return (
        <div className="contact-form-cover-wrapper">
            <div className='contact-form-text-content-cover'>
                <h6>We'd love to hear from you</h6>
            </div>
            <div className="contact-form-cover-wrapper">
                <form onSubmit={handleSubmit}>
                    <div className='form-input-box'>
                        <input type="text" onChange={handleChange} name='name' placeholder="Name*" required />
                    </div>
                    <div className='form-input-box'>
                        <input type="email" onChange={handleChange} name="email" placeholder="Email*" required />
                    </div>
                    <div className='form-input-box'>
                        <input type="url" onChange={handleChange} name="website_url" placeholder="Website URL*" />
                    </div>
                    <div className='form-input-box'>
                        <textarea rows={5} onChange={handleChange} name="project_details" placeholder="Project Details*" required></textarea>
                    </div>

                    <button className="send-proposal-btn" type="submit">Send Proposal</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm
