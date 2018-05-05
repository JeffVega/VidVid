import React from 'react'
import Header from '../header/main-header'
import {Link} from 'react-router-dom'
import './messager.css'
export default function Message() {

    return (
        <div>
            <Header/>
            <div className="message-form">
                <ul className="vid-list-message">
                    <Link to="/id:"><li className="message-friend ">Julie Kim</li></Link>
                    <li className="message-friend">Kingsley</li>
                    <li className="message-friend">Alexa Scott</li>
                    <li className="message-friend">George</li>

                </ul>
            </div>
        </div>
    )

}