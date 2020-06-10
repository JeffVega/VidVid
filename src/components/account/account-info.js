import React from 'react'
import Header from '../header/header'

export default function Account() {
    return (
        <div>
            <Header/>
            <div className='account-page'>
                <h1 className='account-info-header'>Your account Information</h1>
                <p>
                    Username
                </p>
            </div>
        </div>
    )
}