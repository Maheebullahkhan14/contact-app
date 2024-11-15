import React from "react";
import { newsDummyImg } from "../../Assets";
import { FaAngleRight } from "react-icons/fa6";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { contentNotAvailable } from "../../Assets";



const NewsPopup = ({ article, content, onClose }) => {
    return (
        <div className="news-popup">
            <div className="news-popup-content">
                <button onClick={onClose} className="popup-close-button">
                    <IoIosCloseCircleOutline/>
                </button>
                <div className="news-card-img-banner">
                    <img src={article.urlToImage || newsDummyImg} alt={article.title} />
                </div>
                <h2>{article.title}</h2>

                <div className="news-card-info pop-card-info">
                    By {" "}
                        <span className="news-author">
                            {article.author || " Unknown Author"}
                        </span> | {" "}
                        Published on 
                        <span className="news-published-date">
                        {new Date(article.publishedAt).toLocaleDateString()}
                        </span>
                    </div>
                    {content == "" ?(
                        <>
                            <img src={contentNotAvailable} className="content-not-avail-banner" ></img>
                            <h6>Content not available</h6>
                        </>
                    ): (
                        <p>{content || "Loading..."}</p>
                    )}
                <a href={article.url} target="_blank" rel="noopener noreferrer">
                    <span><FaAngleRight/></span>
                    View Original Article</a>
            </div>
        </div>
    );
};

export default NewsPopup;
