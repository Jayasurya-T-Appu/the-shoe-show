import { Element, Link } from "react-scroll"
import "./Footer.css"
import footer_logo from "../../assets/logo.jpg"
const Footer = () => {
  return (
    <Element name="contact">
      <div className="footer_container">
      <div className="footer_logo_container">
        <img className="footer_logo" src={footer_logo} alt="footer logo" />
        <p className="copy_rights">© 2024 The Show Show, Inc.<br />All rights reserved.</p>

      </div>
      <div className="footer_quick_links_container">
        <Link className="link" to="home" smooth={true} duration={500}>Home</Link>
        <Link className="link" to="about" smooth={true} duration={500}>About</Link>
        <Link className="link" to="product" smooth={true} duration={500}>Product</Link>
        <Link className="link" to="contact" smooth={true} duration={500}>Contact</Link>
      </div>

      <div className="footer_service_container">
        <p className="link">Customer Service</p>
        <p className="link">FAQ</p>
        <p className="link">Terms of Use</p>
        <p className="link">Privacy Policy</p>


      </div>
      <div className="footer_connect_container">
        <p className="link">Connect with Us</p>
        <p className="link">Instagram</p>
        <p className="link">Facebook</p>
        <p className="link">Twitter</p>
      </div>

      </div>
      

    </Element>
  )
}

export default Footer
