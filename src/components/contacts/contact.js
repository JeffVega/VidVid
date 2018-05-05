import React from 'react'
import './contact.css'

export default function Contacts() {

    return (
        <div className="contact-form">
            <form>
                <label htmlFor="find-friend">
                    Look for your Friend
                </label>
                <br/><br/>
                <input name="find-friend" type="text"/>
            </form>
            <ul className="friends list-friend">
                <a href=" friend-1">
                    <li>Julie</li>
                </a>
                <a href="friend-2">
                    <li>Kingsley</li>
                </a>
                <a href="friend-3">
                    <li>Alexa</li>
                </a>
                <a href="friend-4">
                    <li>George</li>
                </a>
            </ul>
        </div>
    )
}