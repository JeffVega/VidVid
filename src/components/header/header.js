import React from 'react'
import Logo from '../../utils/imgs/logo.png'
import {Link} from 'react-router-dom';

const Header = () =>{
return(
    <div className="header">
        <div className="header_name">
            <img src={Logo} alt="logo image"/>
        </div>
        <header>
           <ul>
               <li><Link to="/videochat">Video</Link></li>
               <li><Link to="/messages">Message</Link></li>
           </ul>

        </header>
    </div>
)
}

export default Header;