import React from 'react'
import Logo from '../../utils/imgs/logo.png'


const Header = () =>{
return(
    <div className="header">
        <div className="header_name">
            <img src={Logo} alt="logo image"/>
        </div>
        <header>
           <ul>
               <li><a href="">Login</a></li>
               <li><a href="">Sign Up</a></li>
           </ul>

        </header>
    </div>
)
}

export default Header;