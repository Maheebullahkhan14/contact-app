import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { newsDummyImg } from '../../Assets';
import { FaInstagram } from "react-icons/fa";





const NewsCard = ({ article , fetchNewsFeed }) => (
    <div className="news-card">
        <div className='row'>
            <div className='col-lg-4'>
                <div className="news-card-img-banner">
                    <img src={article.urlToImage || newsDummyImg} alt={article.title} />
                </div>
            </div>
            <div className="col-lg-8">
                <div className="news-content-cover-wrapper">
                    <h3>{article.title}</h3>
                    <div className="news-card-info">
                    By {" "}
                        <span className="news-author">
                            {article.author || " Unknown Author"}
                        </span> | {" "}
                        Published on 
                        <span className="news-published-date">
                        {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                    </div>
                    <p>{article.description}</p>

                    {/* Additional info section */}
                
                    <div className="news-card-footer">
                        <div className="news-share-options">
                            <button onClick={() => window.open(`https://twitter.com/intent/tweet?text=${article.title}&url=${article.url}`, '_blank')}><FaXTwitter/></button>
                            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${article.url}`, '_blank')}>
                                <FaFacebookF/>
                            </button>
                            <button onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${article.url}`, '_blank')}>
                                <FaInstagram/>
                            </button>
                        </div>
                        <div className="news-navigate-btn">
                            <button target="_blank" rel="noopener noreferrer" onClick={() => fetchNewsFeed(article)}>
                                Read more
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

);

export default NewsCard;
