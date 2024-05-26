import React, { useState } from 'react'
import logo from "../../assets/logo.jpg"
import './Navbar.css'
import { IoClose } from "react-icons/io5";
import { Link } from 'react-scroll';
import { TiThMenu } from "react-icons/ti";

const Navbar = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false)
    const handleMenu = () => {
        setToggleSidebar(!toggleSidebar)
    }

    return (
        <>
            <nav className="navbar">
                <div className='nav_logo_container'>
                    <img className='nav_logo_img' src={logo} alt="company logo  The Show SHow" />
                    <h1 className='logo_text'>The Shoe Show</h1>
                </div>

                <div class="sidebar">
                    {toggleSidebar ? <IoClose className='icon' onClick={handleMenu} size={32} /> : <TiThMenu className='icon' onClick={handleMenu} size={32} />}


                    <ul class={`dropdown-content ${toggleSidebar ? "show" : "hide"}`}>

                        <li className='side_bar_option'>
                            <Link to="home" smooth={true} duration={500}>Home</Link>
                        </li>
                        <li className='side_bar_option'>
                            <Link to="about" smooth={true} duration={500}>About</Link>
                        </li>
                        <li className='side_bar_option'>
                            <Link to="product" smooth={true} duration={500}>Products</Link>
                        </li>
                        <li className='side_bar_option'>
                            <Link to="contact" smooth={true} duration={500}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <ul className='nav_options_container'>
                    <li className='nav_option'>
                        <Link to="home" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li className='nav_option'>
                        <Link to="about" smooth={true} duration={500}>About</Link>
                    </li>
                    <li className='nav_option'>
                        <Link to="product" smooth={true} duration={500}>Products</Link>
                    </li>
                    <li className='nav_option'>
                        <Link to="contact" smooth={true} duration={500}>Contact</Link>
                    </li>


                </ul>

            </nav>
        </>
    )
}

export default Navbar
