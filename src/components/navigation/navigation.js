import React from 'react'
import './nav.css'
import {link} from 'react-router-dom'
export default function Nav() {

    return (
        <div>
            <nav>
                <ul className="nav">
                   <Link className="nav-link" href="#"> <li>Home</li></Link>
                   <Link className="nav-link" href="#"><li>Messages</li></Link>
                   <Link className="nav-link" href="#"><li>Friends</li></Link>
                   <Link className="nav-link" href="#"><li>Account</li></Link>
                </ul>
            </nav>
        </div>
    );
}