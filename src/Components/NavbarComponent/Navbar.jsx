import React from 'react'
import logo from "../../assets/logo.jpg"
import './Navbar.css'
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
        <div className='nav_logo_container'>
            <img className='nav_logo_img' src={logo} alt="company logo  The Show SHow" />
            <h1>The Shoe Show</h1>
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
