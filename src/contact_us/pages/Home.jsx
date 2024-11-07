import React from 'react'
import Hero from '../components/Hero'
import ContactSection from '../components/ContactSection'
import OfficeInfo from '../components/OfficeVisit'
import CompanyMetrics from '../components/CompanyMetrics'
import Partners from '../components/Partners'
import NewsLetter from "../components/NewsLetter"
import Footer from '../components/Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <ContactSection />
            <OfficeInfo />
            <CompanyMetrics />
            <Partners />
            {/* <NewsLetter /> */}
            <Footer />
        </>
    )
}

export default Home
