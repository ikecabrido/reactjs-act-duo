import React, { useState} from 'react'

import { NavLink } from 'react-router-dom';

import "./Navbar.css"
 const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <nav>
            <NavLink to = "/" className='title'>KodeGO</NavLink>
            <div className="menu" onClick={() => {setMenuOpen (!menuOpen)} }>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ?"open" : ""}>
            {/* <li>
                 <Link to="/home">Home</Link>   
                </li> */}
                <li>
                <NavLink to="/about">About Us</NavLink>
                </li>
                <li>
                <NavLink to="/howitworks">How it Works</NavLink>
                </li>
                <li>
                <NavLink to="/courses">Courses</NavLink>
                </li>
                <li>
                <NavLink to="/tuition">Tuition</NavLink>
                </li>
                <li>
                <NavLink to="/partners">Partners</NavLink>
                </li>
                <li>
                <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                <NavLink to="/faqs">FAQ</NavLink>
                </li>
                <li>
                <NavLink to="/sign">Sign In</NavLink>
                </li>
                <button type="button">Apply Now</button>
              
            </ul>
        </nav>
    );
    
};
export default Navbar;