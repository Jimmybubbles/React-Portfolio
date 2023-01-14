import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {logos, socialMediaUrl } from "../details";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const { linkedin, github, twitter } = socialMediaUrl;
    const toggleClass = () => {
        setIsOpen(!isOpen);
    } 
};

return (
    <header>
        <div>
            <NavLink to="/">
                <img scr={logos.logogradient} alt="logo"/>
            </NavLink>
        <div onClick={toggleClass} className='cursor-pointer'>
            
        </div>
        </div>
{/*navigation event toggling*/}

        <nav>
            <ul>
                <li>
                    <NavLink to="/" onClick={toggleClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" onClick={toggleClass}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/technologies" onClick={toggleClass}>
                        Technologies
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/projects" onClick={toggleClass}>
                        Projects
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" onClick={toggleClass}>
                        Contact
                    </NavLink>
                </li>
            </ul>

{/*unordered list for the social media logos/links */}
        <ul>
            <li>
                <a href={twitter}>
                </a>
            </li>
            <li>
                <a href={linkedin}>

                </a>
            </li>
            <li>
                <a href={github}>

                </a>
            </li>
        </ul>

        </nav>
    </header>
)

export default Header;