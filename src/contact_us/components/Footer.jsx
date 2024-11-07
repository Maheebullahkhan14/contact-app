import React from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { footerLogo } from '../../Assets';


const Footer = () => {
    return (
        <footer className="contact-us-footer-main-wrapper">
            <div className="row">
                <div className="col-lg-5">
                    <div className="contact-us-footer-content">
                        <img src={footerLogo} alt='footer logo'></img>
                        <p>Dsgnr. is an award-winning creative and design agency based in New York, USA.</p>
                        <button className="footer-email-btn">
                            <span>
                                <MdOutlineMarkEmailUnread/></span> info@dsgnr.com
                        </button>
                    </div>
                </div>
                <div className="col-lg-1"></div>
                <div className="col-lg-3">
                    <div className="contact-us-footer-links">
                        <div>
                            <h3>What We Do</h3>
                            <ul>
                                <li>Intro</li>
                                <li>Home</li>
                                <li>Work</li>
                                <li>Pricing</li>
                                <li>Contact Us</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3">
                    <div className="contact-us-footer-links">
                        <div>
                            <h3>Who We Are</h3>
                            <ul>
                                <li>About</li>
                                <li>News</li>
                                <li>Testimonials</li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="contact-us-footer-social">
                        <p>Privacy Policy | Terms</p>
                        <div className="contact-us-social-icons">
                            <a href="#">Twitter</a>
                            <a href="#">Facebook</a>
                            <a href="#">Google+</a>
                        </div>
                    </div>
                </div>
            </div>




        </footer>
    );
};

export default Footer;
