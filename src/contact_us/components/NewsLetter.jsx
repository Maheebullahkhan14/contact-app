import React from 'react'
import { footerLogo } from '../../Assets'
import { newsLetterBanner  , newsLetterHand} from '../../Assets'

const NewsLetter = () => {
  return (
    <div className="newsletter-main-cover-wrapper">
        <div className="news-letter-box-main-cover-wrapper">
            <div className="news-letter-logo">
                <img src={newsLetterBanner}></img>
            </div>
            <div className="new-letter-content-box">
                <h6>Grow Your Business. Build Great Products.</h6>
                <button>Book a free call</button>
            </div>
            <div className='news-letter-hands-banner-box'>
                <img src={newsLetterHand} alt="newsLetterBanner"></img>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter
