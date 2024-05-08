import FooterLogo from '../assets/footer_logo.png';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer>
        <div className='container'>
            <div className="footer-logo">
                <img src={FooterLogo} alt="Restaurant Logo" />
            </div>
            <div className="footer-links">Quick Links
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#specials">Menu</a>
                <a href="#testimonials">Testimonials</a>
            </div>
            <div className="footer-info">Contact
                <p>1234 Lemon Street,CA</p>
                <p>(123) 456-7890</p>
                <p>contact@littlelemon.com</p>
            </div>
            <div className="footer-socials">Connect With Us
                <div className='footer-icon-wrapper'>
                    <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                        <FaFacebook />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                        <FaInstagram />
                    </a>
                    <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
                        <FaTwitter />
                    </a>
                </div>
            </div>
        </div>
        </footer>
    );
}

export { Footer };