import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default function Nav() {

    return (
        <div>
            
            <nav>
                <ul className="nav">
                   <Link to="/" className="nav-link"> <li>Home</li></Link>
                   <Link to="/messages" className="nav-link"><li>Messages</li></Link>
                   <a className="nav-link"><li>Account</li></a>
                </ul>
            </nav>
        </div>
    );
}