import React, { useState } from 'react';
import logo from "../assets/Logo.svg"


const Nav =()=>{

  const [menuOpen, setMenuOpen]=useState(false);

   const toggleMenu=()=> {
    setMenuOpen(!menuOpen)
   }

    return(
         <nav className={`navbar ${menuOpen? "open":""}`}>
          <a href="/" className={logo}>
         <img src={logo} alt="Logo"/>
         </a>
         {/* mobile bar */}
         <div className={"menu-icon"} onClick={toggleMenu}>
            <div className='bar'/>
            <div className='bar'/>
            <div className='bar'/>
         </div>
         {/* Nav items */}

         <ul className={`nav-links${menuOpen? "visible" :""}`}>
            <li>
                <a href='/'>Home</a>
            </li>
            <li>
                <a href='/'>About</a>
            </li>
            <li>
                <a href='/'>Service</a>
            </li>
            <li>
                <a href='/'>Reservation</a>
            </li>
            <li>
                <a href='/'>Order online</a>
            </li>
            <li>
                <a href='/'>Login</a>
            </li>
        
         </ul>

</nav>
    );
}

export default Nav;
