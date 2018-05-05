import React from 'react'
import {Link} from 'react-router-dom'
import './nav.css'

export default function Nav() {

    return (
        <div>
            
            <nav>
                <ul className="nav">
                   <a to="/" className="nav-link"> <li>Home</li></a>
                   <Link to="/messages" className="nav-link"><li>Messages</li></Link>
                   <a className="nav-link"><li>Friends</li></a>
                   <a className="nav-link"><li>Account</li></a>
                </ul>
            </nav>
        </div>
    );
}