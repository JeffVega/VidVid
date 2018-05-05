import React from 'react'
import './header.css'
import Nav from '../navigation/navigation'
import Footer from '../footer/footer'
export default function mainHeader() {
    return (
        <div>
            <header className="main-banner" role="banner">
                <h1 className="video-banner">VidVid</h1>
            </header>
            <Nav/>
            <Footer/>
        </div>
    )
}