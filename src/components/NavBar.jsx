import { useState } from "react";
import { FaBars, FaTimes  } from "react-icons/fa";
import LogoTitle from "../assets/little_lemon_title_small.jpg";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuClick = () => {
        console.log('menu clicked');
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (pRegion) => {
        console.log('link clicked');
        if (isMenuOpen){
            setIsMenuOpen(false);
        }
        // scroll to section
        // check if the section exists
        if (!document.getElementById(pRegion)){
            // I want to go to the home page if the section does not exist
            window.location.href = '/';
        }else{
            const section = document.getElementById(pRegion);
            section.scrollIntoView({behavior: 'smooth'});
        }
    }

    
    return (
        <nav>
        <div className="container">
            <button className={`nav-menu `} onClick={handleMenuClick}>
                <FaBars />
            </button>
            {isMenuOpen && (
                <ul className={`mobile-nav-links ${isMenuOpen ? 'open' : ''}`}>
                <button className="close-menu" onClick={handleMenuClick}>
                    <FaTimes />
                </button>
                <li onClick={() => handleLinkClick('home')} >Home</li>
                <li onClick={() => handleLinkClick('about')} >About</li>
                <li onClick={() => handleLinkClick('specials')}>Menu</li>
                <li onClick={() => handleLinkClick('testimonials')}>Testimonials</li>
                </ul>
            )}
            <img className="nav-logo" src={LogoTitle} alt="Little Lemon Logo" />
            <ul className="nav-links">
                <li onClick={() => handleLinkClick('home')} >Home</li>
                <li onClick={() => handleLinkClick('about')} >About</li>
                <li onClick={() => handleLinkClick('specials')} >Menu</li>
                <li onClick={() => handleLinkClick('testimonials')} >Testimonials</li>
            </ul>
            <button className="nav-order-online">
                Order Online
            </button>
        </div>
        </nav>
    );
    }

export { NavBar };