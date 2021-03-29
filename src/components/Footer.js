import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
import ideate_logo from '../img/vectors/ideate_logo.png'

const Footer = () => {
    return (
        <div id="contact" className="app__footer">
            <div className="app__footerleft">
                <img src={ideate_logo} alt="The Ideate Project Logo" />
                <p>Copyright © 2021 Ideate Project. All rights reserved.</p>
            </div>
            <div className="app__footerright">
                {/*<Link to="/Contact">Contact Us</Link>*/}
                <Link to="/Privacy">Privacy Policy</Link>
                <Link to="/Terms">Terms and Conditions</Link>
            </div>
        </div>
    );
}

export default Footer;
