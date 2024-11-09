import React from 'react';
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { footerLogo, TwitterIcon, facebookIcon, googleFooterIcon ,smsNotifyIcon } from '../../Assets';
import { Link } from "react-router-dom"


const Footer = () => {
    return (
        <footer className="contact-us-footer-main-wrapper">
            <div className="row">
                <div className="col-lg-5 col-md-5">
                    <div className="contact-us-footer-content">
                        <img src={footerLogo} alt='footer logo'></img>
                        <p>Dsgnr. is an award-winning creative and design agency based in New York, USA.</p>
                        <button className="footer-email-btn">
                            <span>
                                <img src={smsNotifyIcon} alt="sms notification icon"></img></span> info@dsgnr.com
                        </button>
                    </div>
                </div>
                <div className="col-lg-2 d-lg-flex d-md-none"></div>
                <div className="col-lg-2 col-md-3">
                    <div className="contact-us-footer-links">
                        <div>
                            <h3>What We Do</h3>
                            <ul>
                                <li>
                                    <Link to="/">
                                        Intro
                                    </Link>
                                </li>
                                <li> <Link to="/">
                                    Home
                                </Link></li>
                                <li> <Link to="/">
                                    Work
                                </Link></li>
                                <li> <Link to="/">
                                    Pricing
                                </Link></li>
                                <li> <Link to="/">
                                    Contact Us
                                </Link></li>
                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-3 col-md-3">
                    <div className="contact-us-footer-links">
                        <div>
                            <h3>Who We Are</h3>
                            <ul>
                                <li> <Link to="/">
                                    About
                                </Link></li>
                                <li> <Link to="/">
                                    News
                                </Link></li>
                                <li> <Link to="/">
                                    Testimonials
                                </Link></li>

                            </ul>
                        </div>

                    </div>
                </div>
                <div className="col-lg-12">
                    <div className="contact-us-footer-social">
                        <p>Privacy Policy | Terms</p>
                        <div className="contact-us-social-icons">

                            <Link to="">
                                <img src={TwitterIcon} alt='facebook icon'></img>
                            </Link>
                            <Link to="">
                                <img src={facebookIcon} alt='facebook icon'></img>
                            </Link>
                            <Link to="">
                                <img src={googleFooterIcon} alt='facebook icon'></img>
                            </Link>

                        </div>
                    </div>
                </div>
            </div>




        </footer>
    );
};

export default Footer;
