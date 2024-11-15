import React, { useState, useEffect } from 'react';
import NewsCard from './NewsCard';
import axios from 'axios';
import Header from './Header';
import NewsPopup from './NewsPopup';
import Loader from './Loader';

const NewsListContent = ({ selectedCategory }) => {
    const [articles, setArticles] = useState([]);
    const [isArticleLoading ,setIsArticleLoading] = useState(false)
    const [newsContent, setNewsContent] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [selectedArticle, setSelectedArticle] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            setIsArticleLoading(true);
            try {
                const response = await axios.get(`https://newsapi.org/v2/top-headlines`, {
                    params: {
                        category: selectedCategory || 'general',
                        apiKey: '223e3502cf5640b1842f5d727652d653',
                        country: 'us'
                    },
                });
                setArticles(response.data.articles);
                setIsArticleLoading(false);
                console.log("Fetched Articles:", response.data.articles);
            } catch (error) {
                setIsArticleLoading(false);
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
        window.scrollTo(0,0);

    }, [selectedCategory]);


    const fetchNewsFeed = async (article) => {
        setSelectedArticle(article);
        setIsPopupOpen(true);
        try {
            const response = await fetch(
                `https://newsapi.org/v2/everything?q=${encodeURIComponent(article.title)}&apiKey=223e3502cf5640b1842f5d727652d653`
            );
            const data = await response.json();
            if (data.articles && data.articles.length > 0) {
                setNewsContent(data.articles[0].content || "");
            } else {
                setNewsContent("");
            }
        } catch (error) {
            console.error("Error fetching news feed:", error);
            setNewsContent("Failed to fetch news content.");
        }
    };

    const closePopup = () => {
        setIsPopupOpen(false);
        setNewsContent("");
        setSelectedArticle(null);
    };

    const filteredArticles = articles?.filter(article => article.title !== "[Removed]");

    return (
        <>
            <Header />
            <div className="news-list-main-content-cov">
                {isArticleLoading ? <Loader /> : (
                    filteredArticles.map((article, index) => (
                        <NewsCard fetchNewsFeed={fetchNewsFeed} key={index} article={article} />
                    ))
                )}
                {isPopupOpen && selectedArticle && (
                    <NewsPopup article={selectedArticle} content={newsContent} onClose={closePopup} />
                )}
            </div>
        </>
    );
};

export default NewsListContent;
