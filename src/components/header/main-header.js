import React from 'react'
import './header.css'
import Nav from '../navigation/navigation'
export default function mainHeader() {
    return (
        <div>
            <header classname="main-banner" role="banner">
                <h1 className="video-banner">VidVid</h1>
            </header>
            <Nav/>
        </div>
    )
}