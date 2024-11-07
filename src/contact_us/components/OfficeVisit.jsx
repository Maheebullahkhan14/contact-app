// src/components/OfficeInfo.js
import React from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


const OfficeInfo = () => {
    return (
        <div className='office-info-main-cover-wrapper'>
            <h6>Come stop by our office sometime</h6>
            <div className="contact-us-office-info ">
                <div className="contact-us-office-details">
                    <h3>New York, USA</h3>
                    <p className='address-text'>7626 W 8th St, Massapequa, NY 11758</p>
                    <p>
                        <a href="mailto:info@dsgnr.com">info@dsgnr.com</a>
                    </p>
                    <p>
                        <a href="tel:543890098">(543) 890-098</a>
                    </p>

                    <button>Get Directions <span>
                        <FaArrowRightLong/>
                        </span></button>
                </div>

            </div>
        </div>
    );
}

export default OfficeInfo;
