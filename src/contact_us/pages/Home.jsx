import React, { useState } from 'react'
import SideBarMenu from '../components/SidebarMenu'
import NewsListContent from '../components/NewsListContent'

const Home = () => {
    const [selectedCategory ,  setSelectedCategory] = useState(null);

    return (
        <>
            <div className="news-app-main-cover-wrapper">
                <div className="news-app-content-cover-wrapper">
                    <SideBarMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
                    <NewsListContent selectedCategory={selectedCategory}/>
                </div>
            </div>
        </>
    )
}

export default Home
